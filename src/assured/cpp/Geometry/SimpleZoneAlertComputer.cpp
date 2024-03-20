#include "SimpleZoneAlertComputer.h"

#include "BoundedZone.h"

#include "afrl/alerts/ImminentZoneViolation.h"

#include <array>
#include <vector>
#include <memory>

using namespace std;
using namespace n_FrameworkLib;

namespace zoneAlert {

SimpleZoneAlertComputer::SimpleZoneAlertComputer(double lookahead) :
    lookaheadTime(lookahead),
    airVehicleConfigs(),
    boundaries(),
    polygons(),
    visibilityGraph() {};


SimpleZoneAlertComputer::~SimpleZoneAlertComputer() {
    // clear maps to let go of contained shared pointers
    airVehicleConfigs.clear();
    boundaries.clear();
    polygons.clear();
    // @TODO: This will result in the visbility graph leaking memory FIX
}

bool SimpleZoneAlertComputer::addZone(shared_ptr<afrl::cmasi::AbstractZone> zonePtr, bool keepIn) {

    // Make a variable to build boundary points
    // And call function on RoutePlannerVisibility Service to convert zone geometry to flat earch x-y-z coordinates
    V_POSITION_t boundaryPoints; //used to store the boundary points     
    bool isSuccess = bFindPointsForAbstractGeometry(zonePtr->getBoundary(), boundaryPoints);
    
    if (isSuccess) {
        // store the XY-plane polygonal boundary of the zone
        // CBoundary(const uint32_t& uiLocalID,const bool& bKeepInZone,const V_POSITION_t& vposBoundaryPoints_m,const afrl::cmasi::AbstractZone& cmasiAbstractZone)
        auto xyBoundaryPtr = make_shared<CBoundary>(
            new CBoundary(zonePtr->getZoneID(), keepIn, boundaryPoints, *zonePtr));

        // Create a Polygon
        auto xyPolygonPtr = make_shared<CPolygon>(new CPolygon(zonePtr->getZoneID()));

        // And update its values using this convoluted non-object oriented approach of other code
        xyPolygonPtr->plytypGetPolygonType().bGetKeepIn() = keepIn;
        xyPolygonPtr->dGetPolygonExpansionDistance() = zonePtr->getPadding();
        
        // polygons store indeces to  external boundary points!
        for (int index = 0; index < xyBoundaryPtr->vposGetBoundaryPoints_m().size(); index++) {
            xyPolygonPtr->viGetVerticies().push_back(index);
        }

        // attempt to 'finalize' the polygon 
        // and blank it out if failure
        isSuccess = (xyPolygonPtr->errFinalizePolygon(xyBoundaryPtr->vposGetBoundaryPoints_m()) == CPolygon::errNoError);

        // make sure the zone isn't empty
        isSuccess &= !(xyBoundaryPtr->vposGetBoundaryPoints_m().empty());

        // if all is well, store the zone, otherwise, make sure no zone is stored (in case this is replacing an earlier declaration)
        if (isSuccess) {
            boundaries[xyBoundaryPtr->getZoneID()] = xyBoundaryPtr;
            polygons[xyPolygonPtr->iGetID()] = xyPolygonPtr;
        }
        else {
            isSuccess = false;
            boundaries[xyBoundaryPtr->getZoneID()] = NULL;
            polygons[xyPolygonPtr->iGetID()] = NULL;
        }  
    }

    return isSuccess;
};


void SimpleZoneAlertComputer::addVehicle(shared_ptr<afrl::cmasi::AirVehicleConfiguration> vehicleConfig) {

}

bool SimpleZoneAlertComputer::prepareForActiveState() {

    // walk all polygons and add them to the visibility graph
    // adding them to the visibility graph

    bool isSuccess = true;

    for (auto iter = boundaries.begin(); iter != boundaries.end(); iter++) {
            auto errPolygon = visibilityGraph.errAddPolygon(iter->second->getZoneID(),
                        iter->second->vposGetBoundaryPoints_m().begin(),
                        iter->second->vposGetBoundaryPoints_m().end(),
                        iter->second->bGetKeepInZone(),
                        iter->second->getPadding() );
            if (errPolygon != n_FrameworkLib::CVisibilityGraph::errNoError)
            {
                isSuccess = false;
                break;
            }
    }

    // finalize all of the polygons in the visibility graph
    // this makes sure they are sound and grows/shrinks them by their padding
    visibilityGraph.errFinalizePolygons();

    // WE NEED TO AVOID CLEARING ANY BOUNDARIES BELOW WHERE A 
    // CPOLYGON HAS THE ZONE ID. ONLY REMOVE DROPPED ZONES
    // AND THEN WE CAN EITHER USE THE ORIGINAL BOUNDARY FOR MIN AND MAX
    // ALTITUDE and the new position points OR UPDATE BOUNDARY CPOSITIONS
    

    // first clear our intermediate data stores
    // TODO: Check reference count logistics for any lost data
    boundaries.clear();
    polygons.clear();

    // now re-extract boundaries and polygons from the visibility graph
    // for easy intersection testing
    for (auto iter = visibilityGraph.vplygnGetPolygons().begin(); iter != visibilityGraph.vplygnGetPolygons().end(); iter++) {
        polygons[iter->iGetID()] = iter;
    }

    // TODO: Assure that these polygons in this form are 'finalized'

    return isSuccess;
}

vector<shared_ptr<afrl::alerts::ImminentZoneViolation>> SimpleZoneAlertComputer::processVehicleStateReport(
        shared_ptr<afrl::cmasi::AirVehicleState> vehicleState) {

    // extract the current position of the vehicle as a CPosition structure
    // TODO: Confirm that MSL is being sent by vehicles
    // Note: The dummy variable assures we are calling a constructor for lat, long, and altitude
    CPosition startPos(vehicleState->getLocation()->getLatitude(), vehicleState->getLocation()->getLongitude(),
        vehicleState->getLocation()->getAltitude(), 0);

    // get instantaneous linear velocity vector and use it to compute starting and ending points
    array<float, 3> velocity = worldFrameVelocity(vehicleState);

    // compute the final predicted position at lookahead time based on the above
    CPosition endPos = futurePosition(startPos, velocity,  lookaheadTime);

    // now startPos and endPos are the endpoints of the linear trajectory to lookaheadTime

    // cycle through all zones to find potential violations on the defined trajectory
    for (auto zoneIter = polygons.begin(); zoneIter != polygons.end(); zoneIter++) {

        // if it is a keep out zone, check for violations as intersection points between the trajectory and zone boundary
        vector<CPosition> intersectionPoints;
        if (! zoneIter->second->plytypGetPolygonType().bGetKeepIn()) {

            // check if we are in the zone. If we are, we don't care about it (too late to warn)
            // NOTE THIS IS A SPECIFIC BEHAVIOR ASKED FOR BY STAKEHOLDERS
            zoneIter->second->
            // TODO: PROBLEM: The CPolygon check inside function is bad bad bad It is grid base and anything else throws an error 

            // find intersection points
            intersectionPoints.clear();
            zoneIter->second->findIntersections(visibilityGraph.vposGetVerticiesBase(), 
                                    startPos, endPos, intersectionPoints);

            // check if there are any boundary intersections
            // if there are none, we don't care about this keep out zone, even if we are in it
            if (intersectionPoints.size()>0) {

                // the earliest intersection leaves the polygon

            }
        


        }
        // for keep in zones, we do something complicated to detect if 
        // the trajectory has points that are not in ANY keep in zones
        else {

        } 
        // if keep out zone

                // if the vehicle present location is 2 times as far as max velocity would take it to zone bounding box, ignore the zone
    
            // determine if the vehicle is inside the zone

                // if it is currently outside, see if trajectory intersects a boundary

                    // if the trajectory intersects the boundary add a predicted violation for earliest intersect

        // if keep in zone

            // if the start loc of vector is in the zone, store in sorted multimap (time-> list of zones) 
            
            // find all intersections of the zone with the trajectory vector at time t>report, and store in the sorted map


    // walk the sorted multimap to determine if at any point one is not in any keep in zone
    // that time becomes the earliest time of failure of keep in and that is reported

}

bool SimpleZoneAlertComputer::bFindPointsForAbstractGeometry(afrl::cmasi::AbstractGeometry* pAbstractGeometry, n_FrameworkLib::V_POSITION_t& vposBoundaryPoints) {
            bool isSuccess(true);
    uxas::common::utilities::CUnitConversions unitConversions;

    // convert uav position and waypoint positions from lat,long
    switch (pAbstractGeometry->getLmcpType())
    {
        case afrl::cmasi::CMASIEnum::CIRCLE:
        {
            afrl::cmasi::Circle* pCircle = static_cast<afrl::cmasi::Circle*> (pAbstractGeometry);
            double dCenterNorth_m(0.0);
            double dCenterEast_m(0.0);
            unitConversions.ConvertLatLong_degToNorthEast_m(
                    pCircle->getCenterPoint()->getLatitude(),
                    pCircle->getCenterPoint()->getLongitude(),
                    dCenterNorth_m, dCenterEast_m);
            double dRadius_m = pCircle->getRadius();
            // calculate boundary points by breaking circleinto line segments
            for (double dAngle_rad = 0.0; dAngle_rad < n_Const::c_Convert::dTwoPi(); dAngle_rad += CIRCLE_BOUNDARY_INCREMENT)
            {
                double dPositionNorth_m = (dRadius_m * cos(dAngle_rad)) + dCenterNorth_m;
                double dPositionEast_m = (dRadius_m * sin(dAngle_rad)) + dCenterEast_m;
                vposBoundaryPoints.push_back(n_FrameworkLib::CPosition(dPositionNorth_m, dPositionEast_m));

            } //for(double dAngle_rad=0.0;dAngle_rad<n_Const::c_Convert::dTwoPi();dAngle_rad+=_PI_O_10)
        }
            break;
        case afrl::cmasi::CMASIEnum::POLYGON:
        {
            afrl::cmasi::Polygon* pplyBoundaryPolygon = static_cast<afrl::cmasi::Polygon*> (pAbstractGeometry);
            for (auto itPoint = pplyBoundaryPolygon->getBoundaryPoints().begin();
                    itPoint != pplyBoundaryPolygon->getBoundaryPoints().end();
                    itPoint++)
            {
                double dNorth_m(0.0);
                double dEast_m(0.0);
                unitConversions.ConvertLatLong_degToNorthEast_m((*itPoint)->getLatitude(), (*itPoint)->getLongitude(), dNorth_m, dEast_m);
                vposBoundaryPoints.push_back(n_FrameworkLib::CPosition(dNorth_m, dEast_m));
            }
        }
            break;
        case afrl::cmasi::CMASIEnum::RECTANGLE:
        {
            afrl::cmasi::Rectangle* pRectangle = static_cast<afrl::cmasi::Rectangle*> (pAbstractGeometry);
            double dCenterNorth_m(0.0);
            double dCenterEast_m(0.0);
            unitConversions.ConvertLatLong_degToNorthEast_m(
                    pRectangle->getCenterPoint()->getLatitude(),
                    pRectangle->getCenterPoint()->getLongitude(),
                    dCenterNorth_m, dCenterEast_m);
            double dRotationHeading_rad = pRectangle->getRotation() * n_Const::c_Convert::dDegreesToRadians();
            n_FrameworkLib::CWaypoint wayRotated;
            //North/East Corner
            wayRotated.m_north_m = pRectangle->getHeight() / 2.0;
            wayRotated.m_east_m = pRectangle->getWidth() / 2.0;
            wayRotated.RotateAboutOriginByHeading(dRotationHeading_rad);
            vposBoundaryPoints.push_back(n_FrameworkLib::CPosition((wayRotated.m_north_m + dCenterNorth_m), (wayRotated.m_east_m + dCenterEast_m)));

            //North/West Corner
            wayRotated.m_north_m = pRectangle->getHeight() / 2.0;
            wayRotated.m_east_m = -pRectangle->getWidth() / 2.0;
            wayRotated.RotateAboutOriginByHeading(dRotationHeading_rad);
            vposBoundaryPoints.push_back(n_FrameworkLib::CPosition((wayRotated.m_north_m + dCenterNorth_m), (wayRotated.m_east_m + dCenterEast_m)));

            //South/West Corner
            wayRotated.m_north_m = -pRectangle->getHeight() / 2.0;
            wayRotated.m_east_m = -pRectangle->getWidth() / 2.0;
            wayRotated.RotateAboutOriginByHeading(dRotationHeading_rad);
            vposBoundaryPoints.push_back(n_FrameworkLib::CPosition((wayRotated.m_north_m + dCenterNorth_m), (wayRotated.m_east_m + dCenterEast_m)));

            //South/East Corner
            wayRotated.m_north_m = -pRectangle->getHeight() / 2.0;
            wayRotated.m_east_m = pRectangle->getWidth() / 2.0;
            wayRotated.RotateAboutOriginByHeading(dRotationHeading_rad);
            vposBoundaryPoints.push_back(n_FrameworkLib::CPosition((wayRotated.m_north_m + dCenterNorth_m), (wayRotated.m_east_m + dCenterEast_m)));
        }
            break;
        default:
            CERR_FILE_LINE_MSG("ERROR::errFindPointsForAbstractGeometry:: unknown geometry type [" << pAbstractGeometry->getLmcpType() << "] encountered.")
            isSuccess = false;
            break;
    }
    return (isSuccess);
    }


};

