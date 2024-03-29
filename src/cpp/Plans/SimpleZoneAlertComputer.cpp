#include "SimpleZoneAlertComputer.h"

#include <array>
#include <vector>
#include <memory>
#include <afrl/cmasi/Circle.h>
#include <afrl/cmasi/Polygon.h>
#include <afrl/cmasi/Rectangle.h>

#define CIRCLE_BOUNDARY_INCREMENT (n_Const::c_Convert::dPiO10())

using namespace std;
using namespace n_FrameworkLib;
using namespace afrl;
using namespace alerts;

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
    V_POSITION_t boundaryPoints; //used to store the boundary points  while we convert the,   
    bool isSuccess = bFindPointsForAbstractGeometry(zonePtr->getBoundary(), boundaryPoints);
    
    if (isSuccess) {
        // store the XY-plane polygonal boundary of the zone (this copies the boundaryPoints in an internal record)
        auto boundaryPtr = make_shared<CBoundary>(
            new CBoundary(zonePtr->getZoneID(), keepIn, boundaryPoints, *zonePtr));

        // Create a Polygon
        auto polygonPtr = make_shared<CPolygon>(new CPolygon(zonePtr->getZoneID()));

        // And update its values using this convoluted non-object oriented approach of other code
        polygonPtr->plytypGetPolygonType().bGetKeepIn() = keepIn;
        polygonPtr->dGetPolygonExpansionDistance() = zonePtr->getPadding();
        
        // polygons store indeces to  external boundary points (they are in order in the xyBoundary)
        for (int index = 0; index < boundaryPtr->vposGetBoundaryPoints_m().size(); index++) {
            polygonPtr->viGetVerticies().push_back(index);
        }

        // attempt to 'finalize' the polygon 
        // and blank it out if failure
        isSuccess = (polygonPtr->errFinalizePolygon(boundaryPtr->vposGetBoundaryPoints_m()) == CPolygon::errNoError);

        // make sure the zone isn't empty
        isSuccess &= !(boundaryPtr->vposGetBoundaryPoints_m().empty());

        // if all is well, store the zone, otherwise, make sure no zone is stored (in case this is replacing an earlier declaration)
        if (isSuccess) {
            boundaries[boundaryPtr->getZoneID()] = boundaryPtr;
            polygons[polygonPtr->iGetID()] = polygonPtr;
        }
        else {
            isSuccess = false;
            boundaries[boundaryPtr->getZoneID()] = NULL;
            polygons[polygonPtr->iGetID()] = NULL;
        }  
    }

    return isSuccess;
}


void SimpleZoneAlertComputer::addVehicle(shared_ptr<afrl::cmasi::AirVehicleConfiguration> vehicleConfig) {

}

vector<shared_ptr<ProcessedZone>> SimpleZoneAlertComputer::prepareForActiveState() {

    bool isSuccess = true;

    // walk all polygons and add them to the visibility graph
    // adding them to the visibility graph
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

    // Clear out old data
    // TODO: Check reference count logistics for any lost data
    boundaries.clear();
    polygons.clear();

    vector<shared_ptr<afrl::alerts::ProcessedZone>> processedZones;

    // now re-extract boundaries and polygons from the visibility graph
    // for easy intersection testing
    for (auto iter = visibilityGraph.vplygnGetPolygons().begin(); iter != visibilityGraph.vplygnGetPolygons().end(); iter++) {
        
        // steal reference to polygon from our visibility graph
        polygons[iter->iGetID()] = make_shared<CPolygon>(iter);
        
        // recreate boundary, pulling the CPositions out of visibiity graph
        // and copying them into our boundary points vector for the polygon
        V_POSITION_t boundaryPoints;   
        for (auto vit = iter->viGetVerticies().begin(); vit!=iter->viGetVerticies().end(); vit++) {
            boundaryPoints.push_back(visibilityGraph.vposGetVerticiesBase()[*vit]);
        }

        // now fix the bouundary of the polygon to point to the CBoundary
        iter->viGetVerticies().clear();
        for (int i = 0; i< boundaryPoints.size(); i++) {
            iter->viGetVerticies().push_back(i);
        }
        // note we do build the boundaries with blank abstract zones. That info was lost in use of visibilitygraph
        afrl::cmasi::AbstractZone blankAbstract;
        auto boundaryPtr = make_shared<CBoundary>(
            new CBoundary(iter->iGetID(), iter->plytypGetPolygonType().bGetKeepIn(), boundaryPoints, 
                            blankAbstract));
        boundaries[boundaryPtr->getZoneID()] = boundaryPtr;

        // store an announcement of the zone
        shared_ptr<ProcessedZone> procZonePtr = 
            make_shared<ProcessedZone>(new ProcessedZone());
        for (auto vit = boundaryPtr->vposGetBoundaryPoints_m().begin(); 
                    vit != boundaryPtr->vposGetBoundaryPoints_m().end(); vit++) {
            afrl::alerts::Position2D * vertexPosPtr = new afrl::alerts::Position2D();
            vertexPosPtr->setEast(vit->m_east_m);
            vertexPosPtr->setNorth(vit->m_north_m);
            procZonePtr->getVertices().push_back(vertexPosPtr);            
        }

        // store the processed zone in vector to return to caller
        processedZones.push_back(procZonePtr);
    }

    // Postcondition: assert(polygons.size() == boundaries.size());
    // Postcondition: assert(polygons.size() == visibilityGraph.vplygnGetPolygons().size())

    return processedZones;
}

vector<shared_ptr<ImminentZoneViolation>> SimpleZoneAlertComputer::processVehicleStateReport(
        shared_ptr<afrl::cmasi::AirVehicleState> vehicleState, 
        std::stringstream &sstrErrorMessage) {

    // extract the current position of the vehicle as a CPosition structure
    // TODO: Confirm that MSL is being sent by vehicles
    // Note: The dummy variable assures we are calling a constructor for lat, long, and altitude
    CPosition startPos(vehicleState->getLocation()->getLatitude(), vehicleState->getLocation()->getLongitude(),
        vehicleState->getLocation()->getAltitude(), 0);

    // get instantaneous linear velocity vector and use it to compute starting and ending points
    array<float, 3> velocity = worldFrameVelocity(vehicleState);

    // compute the final predicted position at lookahead time based on the above
    CPosition endPos = futurePosition(startPos, velocity,  lookaheadTime);

    // cycle through all of the zones to find potential violations
    // This is primitive and can be improved, but is the approach of "SimpleZoneAlertComputer"
    for (int zoneIndex = 0; zoneIndex < polygons.size(); zoneIndex++) {

        shared_ptr<CBoundary> boundaryPtr = boundaries[zoneIndex];
        shared_ptr<CPolygon> polyPtr = polygons[zoneIndex];

        // check if the vehicle is currently in the zone
            // @TODO: Note that this calculates only on the x-y plane even through 
            //  the function takes altitude as a parameter. That is good as 
            //  polygons are on the x-y plane only and altitude info was lost in polygon merge
            //  but suggets potential failures in the mathematical paradigm if we are not careful
        bool vehicleInZone = polyPtr->InPolygon(startPos.m_east_m, startPos.m_north_m, 
                            startPos.m_altitude_m,
                            boundaryPtr->vposGetBoundaryPoints_m(), 
                            sstrErrorMessage);

        // Intended behavior is to only alert on keep-out zones that the vehicle is currently outside, 
        // and keep-in zones the vehicle is currently inside
        if ( vehicleInZone == boundaryPtr->bGetKeepInZone()) {

            // Report the 'soonest' intersection
            shared_ptr<CPosition> closestIntersection = findClosestIntersection(
                    startPos, endPos, polyPtr, boundaryPtr);

            if (closestIntersection != NULL) {

                Position2D* positionPtr = new Position2D();
                positionPtr->setEast(closestIntersection->m_east_m);
                positionPtr->setNorth(closestIntersection->m_north_m);

                double timeToIntersection = computeTimeToPosition(startPos, endPos,
                    velocity, *closestIntersection); or should we pass Position2D?

                auto violation = make_shared<ImminentZoneViolation> (
                    new ImminentZoneViolation());
                violation->setZoneID(polyPtr->iGetID());
                violation->setKeepIn(boundaryPtr->bGetKeepInZone());
                violation->setVehicleID(vehicleState->getID());
                violation->setInterceptPosition(positionPtr);
                violation->setTimeToIntercept(timeToIntersection);
            }

        }

    }

}


shared_ptr<CPosition> SimpleZoneAlertComputer::findClosestIntersection(CPosition startPos, 
            CPosition endPos, shared_ptr<CPolygon> polygonPtr, 
            shared_ptr<CBoundary> polygonBoundaryPtr) {

    V_POSITION_t intersections;
    polygonPtr->findIntersections(polygonBoundaryPtr->vposGetBoundaryPoints_m(),startPos, endPos,
                    intersections);

    CPosition *closestPtr = NULL;

    if (intersections.size()>0) {

        double farthest = std::numeric_limits<double>::max();

        for (auto intersection = (intersections.begin()); intersection != intersections.end(); 
            intersection++) {
            double dist = startPos.relativeDistance2D_m(*intersection);

            if (dist<farthest) {
                closestPtr = &(*intersection);
            }
        }
    }    

    return make_shared<CPosition>(closestPtr);
}


inline double SimpleZoneAlertComputer::computeTimeToPosition(CPosition startPos, CPosition endPos, 
                    array<float, 3> velocity, CPosition futurePosition) {

    // compute relative slope to choose whether we compute using x or y for accuracy

    // if the trajetory is mostly horizontal
    CPosition trajVec = endPos - startPos;
    CPosition diffVec = futurePosition - startPos;

    // if the future position is the start position, return the time to arrive as 0
    if (diffVec.m_east_m == 0 && diffVec.m_north_m == 0) {
        return 0;
    }

    // otherwise, compute the time to arrive based on relationship to x or y value, whichever can 
    // provide greater accuracy and precision
    if (trajVec.m_east_m != 0 && (trajVec.m_north_m / trajVec.m_east_m) < 0.5 ) {
        return diffVec.m_east_m/ velocity[0];
    }
    // if line is very vertical compute from north difference
    else {
        return diffVec.m_north_m / velocity[1];
    }

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
            
            isSuccess = true;
            break;
        }
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

            isSuccess = true;
            break;
        }
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

            isSuccess = true;
            break;
        }
    }
    return (isSuccess);
}


};

