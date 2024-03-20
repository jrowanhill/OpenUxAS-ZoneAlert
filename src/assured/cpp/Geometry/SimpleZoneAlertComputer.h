/** A class that keeps declared Zones as BoundedZones to test aircraft for violation
*/

#ifndef UXAS_SIMPLE_ZONE_ALERT_COMPUTER_H
#define UXAS_SIMPLE_ZONE_ALERT_COMPUTER_H

#include "ZoneAlertComputer.h";

#include <map>

#include "afrl/cmasi/AirVehicleConfiguration.h"
#include "afrl/alerts/ImminentZoneViolation.h"


#include "Polygon.h"
#include "VisibilityGraph.h"

using namespace std;
using namespace n_FrameworkLib;

namespace zoneAlert {

/**
 * @brief An implementation of the ZoneAlertComputer that computes simple linear trajectory violations from present vehicle state against known zones.
 *  It treats zones as 3D polyhedra defined by a minimum and maximum altitude and a regular polygon in the horizontal plane.
 *
 * @details Given declarations of all relevant zones and aircraft, this alerter will compute imminent zone violations based on the 
 * current linear trajectory of an air vehicle's state report. This implementation is deliberately simplistic. It uses no graph theory
 * or graph algorithm mathematics beyond basic highschool geometry. In addition it naively checks all zones with no culling of far
 * away zones in a practical manner. Together, this makes the implementation far less efficient than it could be. This is offset by 
 * maintainabilty. 
 * 
 * @TODO Algorithmic analysis of cost based on 
 * 1. Number of zones
 * 2. Number of edges of zones
 * 3. Number of those edges likely to simultaneously intersect lookahead trajectory
 * 
 */
class SimpleZoneAlertComputer : public ZoneAlertComputer {

public: 

    /**
     * @brief Construct a new Simple Zone Alert Computer object
     * 
     * @param lookahead the amount of time (in seconds) that computer will look for impending zone violations
     */
    SimpleZoneAlertComputer(double lookahead);

    ~SimpleZoneAlertComputer();

    double getLookaheadTime() { return lookaheadTime; }


    //---- Inherited Methods -----//

    bool addZone(shared_ptr<afrl::cmasi::AbstractZone> zonePtr, bool keepIn);

    void addVehicle(shared_ptr<afrl::cmasi::AirVehicleConfiguration> vehicleConfig);

    bool prepareForActiveState();

    vector<shared_ptr<afrl::alerts::ImminentZoneViolation>> processVehicleStateReport(
                shared_ptr<afrl::cmasi::AirVehicleState> vehicleState);

    //---- End Inherited Methods ----//

protected:

    /** A code function borrowed from RoutePlannerVisibilityService class
     * TODO: It is bad that this code is copied from router planner visibility service. 
     * Refactor so that the code is a single source static function somwwhere.     * 
    */
    bool bFindPointsForAbstractGeometry(afrl::cmasi::AbstractGeometry* pAbstractGeometry, n_FrameworkLib::V_POSITION_t& vposBoundaryPoints);


    bool isInPolygon(CPosition & position, CPolygon & polygon) {
        // check if position is within the min and max altitudes of the CPolygon's abstract zone altitudes

        // If so, check if position is within the polygon
        // Use winding number or ray cast algorithm
    }

private:

    // ---- start with a very simple and inefficient implementation ----

    // the vehicles that the service has received announcements for
    map<long int, shared_ptr<afrl::cmasi::AirVehicleConfiguration>> airVehicleConfigs;

    // the vertices of the zones
    map<long int, shared_ptr<CBoundary>> boundaries;

    // a visibility graph used to duplicate the form zones take when shrunk/expanded by RoutePlannerVisibilityService
    CVisibilityGraph visibilityGraph;

    // the final set of zones as CPolygons
    // Each zone is a CPolygon that refers to the vertex points of its CBoundary (stored in boundaries)    
    // Asumption: assuming CMASI int64 can be a simple int is based on other OpenUxAS code that does so
    map<int, shared_ptr<CPolygon>> polygons;

    // ----- member variables ------//

    const double lookaheadTime;

};

};

#endif