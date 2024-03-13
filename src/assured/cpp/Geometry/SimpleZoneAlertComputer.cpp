#include "SimpleZoneAlertComputer.h"
#include "BoundedZone.h"

#include <array>

using namespace std;
using namespace n_FrameworkLib;

namespace zoneAlert {

SimpleZoneAlertComputer::SimpleZoneAlertComputer() :
    airVehicleConfigs(),
    boundaries(),
    polygons(),
    visibilityGraph() {};


SimpleZoneAlertComputer::~SimpleZoneAlertComputer() {
    // clear maps to let go of contained shared pointers
    airVehicleConfigs.clear();
    boundaries.clear();
    polygons.clear();
    visibilityGraph.clear();
}


bool SimpleZoneAlertComputer::addZone(std::shared_ptr<afrl::cmasi::AbstractZone> abstractZonePtr, bool keepIn) {

    // Make a variable to build boundary points
    // And call function on RoutePlannerVisibility Service to convert zone geometry to flat earch x-y-z coordinates
    V_POSITION_t vposBoundaryPoints; //used to store the boundary points     
    bool isSuccess = RoutePlannerVisibilityService::bFindPointsForAbstractGeometry(abstractZonePtr->getBoundary(), vposBoundaryPoints);
    
    if (isSuccess) {
        // store the XY-plane polygonal boundary of the zone
        // CBoundary(const uint32_t& uiLocalID,const bool& bKeepInZone,const V_POSITION_t& vposBoundaryPoints_m,const afrl::cmasi::AbstractZone& cmasiAbstractZone)
        auto xyBoundaryPtr = new CBoundary(abstractZone->getZoneID(), isKeepIn, boundaryPoints, *abstractZone);

        // Create a Polygon
        auto xyPolygonPtr = new CPolygon(abstractZone->getZoneID());

        // And update its values using this convoluted non-object oriented approach of other code
        xyPolygonPtr->plytypGetPolygonType().bGetKeepIn() = keepIn;
        xyPolygonPtr->dGetPolygonExpansionDistance() = abstractZone->getPadding();
        
        // polygons store indeces to  external boundary points!
        for (int index = 0; index < xyBoundaryPtr->getBoundaryPoints().size(); index++) {
            xyPolygonPtr->viGetVerticies().push_back(index);
        }

        // attempt to 'finalize' the polygon 
        // and blank it out if failure
        isSuccess = (xyPolygonPtr->errFinalizePolygon(xyBoundaryPtr->getBoundaryPoints()) == CPolygon::errNoError);

        // make sure the zone isn't empty
        isSuccess &= !(xyBoundaryPtr->vposGetBoundaryPoints_m().empty());

        // if all is well, store the zone, otherwise, make sure no zone is stored (in case this is replacing an earlier declaration)
        if (isSuccess) {
            boundaries[xyBoundaryPtr->getZoneID()] = xyBoundaryPtr;
            polygons[xyPolygonPtr->iGetID()] = xyPolygonPtr;
        }
        else {
            isSuccess = false;
            boundaries[xyBoundaryPtr->getZoneID()] = null;
            polygons[xyPolygonPtr->iGetID()] = null;
        }  
    }

    return isSuccess;
};


void SimpleZoneAlertComputer::addVehicle(std::shared_ptr<afrl::cmasi::AirVehicleConfiguration> vehicleConfig) {

}

void SimpleZoneAlertComputer::prepareForActiveState() {

    // walk all polygons and add them to the visibility graph
    // adding them to the visibility graph
    for (auto iter = boundaries.begin(); iter != bounadaries.end(); iter++) {
            auto errPolygon = visibilityGraph.errAddPolygon(iter->second->getZoneID(),
                        iter->second->vposGetBoundaryPoints_m().begin(),
                        iter->second->vposGetBoundaryPoints_m().end(),
                        iter->second->bGetKeepInZone(),
                        iter->second->getPadding() );
            if (errPolygon != n_FrameworkLib::CVisibilityGraph::errNoError)
            {
                CERR_FILE_LINE_MSG("ERROR::errBuildVisibilityGraphBase:: error encountered while adding Keep In Zone ID[" << iter->second->getZoneID() << "] to the visibility graph.")
                isSuccess = false;
                break;
            }
    }

    // finalize all of the polygons in the visibility graph
    // this makes sure they are sound and grows/shrinks them by their padding
    visibilityGraph.errFinalizePolygons();

    // first clear our intermediate data stores
    // TODO: Check reference count logistics for any lost data
    boundaries.clear();
    polygons.clear();

    // then extract the zone polygons from the visibility graph and put them back in the map
    // check that there is a single keepIn zone and record it separately
    // put the others in keep out zones
    for (auto iter = visibilityGraph.vplygnGetPolygons().begin(); iter != visibilityGraph.vplygnGetPolygons().end(); iter++) {
        polygons[iter->iGetID()] = iter;
    }

    // TODO: Assure that these polygons in this form are 'finalized'

}

vector<shared_ptr<PredictedViolation>> SimpleZoneAlertComputer::processVehicleStateReport(
        std::shared_ptr<afrl::cmasi::AirVehicleState> vehicleState) {

    // extract the current position of the vehicle as a CPosition structure
    // TODO: Confirm that MSL is being sent by vehicles
    // Note: The dummy variable assures we are calling a constructor for lat, long, and altitude
    CPosition startPos(vehicleState->getLocation()->getLatitude(), vehicleState->getLocation()->getLongitude(),
        vehicleState->getLocation()->getAltitude(), 0);

    // get instantaneous linear velocity vector and use it to compute starting and ending points
    std::array<float, 3> velocity = worldFrameVelocity(vehicleState);

    // compute the final predicted position at lookahead time based on the above
    CPosition endPos = futurePosition(startPos, velocity,  lookaheadTime);

    // now startPos and endPos are the endpoints of the linear trajectory to lookaheadTime

    // cycle through all zones to find potential violations on the defined trajectory
    for (auto zoneIter = polygons.begin(); zoneIter != polygons.end(); zoneIter++) {

        // if it is a keep out zone, check for violations as intersection points between the trajectory and zone boundary
        std::vector<CPosition> intersectionPoints;
        if (! zoneIter->bGetKeepInZone()) {

            // check if we are in the zone. If we are, we don't care about it (too late to warn)
            // NOTE THIS IS A SPECIFIC BEHAVIOR ASKED FOR BY STAKEHOLDERS
            PROBLEM: The CPolygon check inside function is bad bad bad It is grid base and anything else throws an error 

            // find intersection points
            intersectionPoints.clear();
            findIntersections(visibilityyGraph.vplygnGetPolygons(),startPos, endPos, intersectionPoints)

            // check if there are any boundary intersections
            // if there are none, we don't care about this keep out zone, even if we are in it
            if (intersectionPoints.size()>0) {

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


};

