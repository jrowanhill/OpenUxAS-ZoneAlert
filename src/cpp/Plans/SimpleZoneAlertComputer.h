/** A class that keeps declared Zones as BoundedZones to test aircraft for violation
*/

#pragma once

#include "ZoneAlertComputer.h";

#include <map>

#include "afrl/cmasi/AirVehicleConfiguration.h"
#include "afrl/alerts/ImminentZoneViolation.h"
#include "afrl/alerts/Position2D.h"
#include "afrl/alerts/ProcessedZone.h"

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

    /**
     * @requirements SR-2-2-2-3
     */
    bool acceptableLookaheadTime() {return lookaheadTime > 0; }

    //---- Inherited Methods -----//

    bool addZone(shared_ptr<afrl::cmasi::AbstractZone> zonePtr, bool keepIn);

    void addVehicle(shared_ptr<afrl::cmasi::AirVehicleConfiguration> vehicleConfig);

    vector<shared_ptr<afrl::alerts::ProcessedZone>> prepareForActiveState();

    vector<shared_ptr<afrl::alerts::ZoneViolation>> processVehicleStateReport(
                shared_ptr<afrl::cmasi::AirVehicleState> vehicleState, 
                std::stringstream &sstrErrorMessage);

    //---- End Inherited Methods ----//

protected:

    /** 
     * @brief compute existing and imminent zone violations from vehicle linear trajectory
     * @param vehicleID the id of the vehicle being checked for zone violations
     * @param startPos the position of the vehicle in the state state report 
     * @param startTime the time of the vehicle state reported position
     * @param endPos the position of the vehicle along its linear velocity to lookahead time.
     * @param velocity the velocity vector between start point and end point
    */
    vector<shared_ptr<ZoneViolation>> findViolations(const int64_t vehicleID,
        const CPosition &startPos, const float startTime, const CPosition &endPos,
        const array<float, 3> &velocity);

    
    /**
     * @brief compute whether there is an existing zone violation between a merged zone and
     * a vehicle given the vehicle's position
     * @param zoneID the id of the merged zone
     * @param vehicleID the id of the vehicle
     * @param vehiclePosition the positin of the vehicle
     * @param timeOfPosition the time at which the vehicle is at the position
     * @returns Null if there is no existing violation at the reported position with the merged zone,
     * otherwise returns an ExistingZoneViolation between the vehile and zone at the reported position and time
     */
    ExistingZoneViolation *findExistingViolationWith(const int64_t zoneID, const int64_t vehicleID, 
        const CPosition &vehiclePosition);

    /**
     * @brief compute whether there is an imminent zone violation between a merged zone and a vehicle 
     * givemn the vehicles linear trajectory in the lookahead time window
     * @param zoneID the id of the merged zone
     * @param vehicleID the id of the vehicle being checked for zone violations
     * @param startPos the position of the vehicle in the state state report 
     * @param startTime the time of the vehicle state reported position
     * @param endPos the position of the vehicle along its linear velocity to lookahead time.
     * @param velocity the velocity vector between start point and end point
     * @returns Null if there is no imminent violation on the linear trajectory to lookahead time between
     * the vehicle and the zone, otherwise returns the imminent violation containing the earliest future time (from reported time)
     * and position at which the vehicle will be in violation with the zone if it follows its present immediate velocity
     */
    ImminentZoneViolation *findImminentViolationWith(const int64_t zoneID, const int64_t vehicleID,
        const CPosition &startPos, const float startTime, const CPosition &endPos,
        const array<float, 3> &velocity);

    



    /** @brief A code function borrowed from RoutePlannerVisibilityService class to convert
     * received lat,long, alt coordinates into local planar x,y,z coords
     * 
     * TODO: It is bad that this code is copied from router planner visibility service. 
     * Refactor so that the code is a single source static function somwwhere.     * 
    */
    bool bFindPointsForAbstractGeometry(afrl::cmasi::AbstractGeometry* pAbstractGeometry, n_FrameworkLib::V_POSITION_t& vposBoundaryPoints);



    /**
     * @brief Compute the closest interection of the given 2D polygon's edges with a 3D vector
     * 
     * @details Given a vector from startPos to endPos in 3D space, and polygon in 2D space xy space,
     * computes the closest interection betwween the vector and the polygon's boundary. Computation is
     * with simple double precision.
     * 
     * @param startPos the start of the vector
     * @param endPos the end of the vector
     * @param polygonPtr pointer to the polygon to check for boundary intersections with the vector
     * @param polygonBoundaryPtr pointer to the boundary of the polygon
     * 
     * @return the closest intersection from startPos of the vector with the polygon boundary, 
     * or NULL if no such intersection
    */
    inline shared_ptr<CPosition> findClosestIntersection(CPosition startPos, 
                    CPosition endPos, shared_ptr<CPolygon> polygonPtr, 
                    shared_ptr<CBoundary> polygonBoundaryPtr);


    /** @brief Given a future motion vector, the velocity on that vector, and a position 
     * on that vector, compute the time in the future at which that position is achieved
     *
     * @param startPos the start of the vector
     * @param endPos the end of the vector
     * @param velocity the velocity on that vector
     * @param futurePosition a future position on that vector
     * 
     * @pre The futurePosition is on the vector from startPos to endPos
     * @pre the velocity is the velocity on the vector from startPos to endPos
     * 
     * @return the number of seconds in the future in which the future position is achieved
     */
    inline double computeTimeToPosition(CPosition startPos, CPosition endPos, 
                    array<float, 3> velocity, CPosition futurePosition);


    /** @brief Creates an zone violation event object from information about the event.
     * 
     * @param zoneID the id of the zone with which a vehicle has a detected zone violation event
     * @param isKeepInZone whether the violated zone is of type keep in (true) or keep out (false)
     * @param vehicleID the id of the vehicle in violation with the zone
     * @param vehicleStateReportTime the timestamp of the vehicle state report from which violation was detected
     * @param east_m the positionn in cartesian ground plane x coordinate of violation in meters
     * @param north_m the position in cartesian ground plane y coordinate of violation in meters
     * @param altitude_m the altitude (z coordinate) of violation in meters
     * @param timeToIntercept the time of violation occurence at the indicated position
     *
     * @return an ActiveZoneViolation iff the timeToIntercept is the present vehicle state report time
     * 
     *  
     */
    inline shared_ptr<ZoneViolation> SimpleZoneAlertComputer::makeZoneViolation(
                int zoneID, bool isKeepInZone, 
                int64_t vehicleID, float vehicleStateReportTime,
                double east_m, double north_m, double altitude_m,
                float timeToIntercept);



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