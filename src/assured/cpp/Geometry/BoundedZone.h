/** A class with a defined bounding box around
 * Operates in Cartesian coordinates
 */

#ifndef UXAS_BOUND_ZONE_H
#define UXAS_BOUND_ZONE_H

#include "Polygon.h"

using namespace n_FrameworkLib;

namespace n_FrameworkLib
{

class BoundedZone {

public:
    /**
     * @brief Construct a new Bounded Zone object from a CMASI Keep In Zone 
     * 
     * @param keepInZone
     */
    BoundedZone(const std::shared_ptr<afrl::cmasi::KeepInZone>& keepInZone);

    /**
     * @brief Construct a new Bounded Zone object from a CMASI Keep Out Zone
     * 
     * @param keepOutZone 
     */
    BoundedZone(const std::shared_ptr<afrl::cmasi::KeepOutZone>& keepOutZone);

    //--------- Convenience Basic Getter/Setters ------------//

    const bool isValid() { return isValid; }

    const bool isKeepIn() { return keepIn; }

    const int64_t getID() { return abstractZone->getZoneID(); }

    const uint getMinAltitude() { return abstractZone->getMinAltitude(); }

    const uint getMaxAltitude() { return abstractZone->getMaxAltitude(); }


    //--------- Key Calculations ----------------------------//

    struct TrajectoryIntersectionResults {
            /**
             * @brief Construct a new Trajectory Intersection Results indicating a false intersection result
             * 
             */
            TrajectoryIntersectionResults(Vector3D & position, const float time) 
                : earliestIntersectionPosition(position) {
                earliestIntersectionTIme = time;
            };

            const Vector3D earliestIntersectionPosition;
            const float earliestIntersectionTime 
    };


    /**
     * @brief determines whether, where, and when a trajectory of constant velocity intersects the zone     * 
     * 
     * @param startPoint start location of the trajectory
     * @param endPoint  end location of the trajectory
     * @param startTime the time at which the vehicle is at the start location
     * @param endTime the time at which the vehicle is at the end location
     * @param earliestIntersectionPoint 
     * @param earliestIntersectionTime 
     * @return std::shared_ptr<BoundedZone::TrajectoryIntersectionResults> with null if no intersection or a TrajectoryIntersectionResult containing the earliest intersection
     */
    std::shared_ptr<BoundedZone::TrajectoryIntersectionResults> linearTrajectoryIntersects(
                    const Vector3D & startPosition, 
                    const Vector3D endPosition, 
                    const float startTime, 
                    const float endTime, 
                    Vector3D & earliestIntersectionPosition, 
                    float &earliestIntersectionTime);

    bool aSegmentEndpointIsContained();

    bool theSegmentIntersectsBoundary();



private:

    BoundedZone(const std::shared_ptr<afrl::cmasi::AbstractZone>& abstractZone, bool keepIn);

    /**
     * @brief expands or shrinks zones based on their padding distance
     * 
     * @details Note, this function copies the functionality currently found in the VisibilityGraph class used by
     * RoutePlannerVisibilityService. This is *not* generally a good idea. One should refactor code to live in 
     * geometry so that all such polygons apply the same grow/shrink semantics. However, we did not do that here
     * because we are not touching anything that might change/break behavior of RoutePlannerVisibilityService as 
     * might occur on other services. Preferably, this function would exist on CPolygon as a static public member 
     * function that would return a grown shrunk CPolygon for any input CPolygon. One could then add an alternate
     * modifiying grow/shrink for individual polygons that calls the base function and copies data. 
     */
    void BoundedZone::pad();



    /** Whether a zone is keep-in, or if false, keep out*/
    const bool keepIn;

    // Polygonal boundary of the zone
    const shared_ptr<AbstractZone> abstractZonePtr; 
    const CBoundary * xyBoundary;
    const CPolygon * xyPolygonPtr;

    // wonky externalized boundary points of the CBoundary and CPolygon classes
    V_POSITION_t boundaryPoints;

    // set to true when a zone is valid (has all the necessary data)
    bool isValid;




};


};

#endif