/** A class with a defined bounding box around
 * Operates in Cartesian coordinates
 */

#include "Polygon.h"

using namespace n_FrameworkLib;

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

    const bool isKeepIn(); 

    const int64_t getID();

    const uint getMinAltitude();

    const uint getMaxAltitude();

    const getXYPolygonalBoundary();

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

    // The zone's id
    // Type Invariant: Must match CMASI zone ID data type
    const int64_t id;

    // Minimum and Maximum altitude of the zone.
    // Type Invariant: Must match data type of equivalent values in CMASI zone declarations
    const float minAltitude, maxAltitude;

    // Polygonal boundary of the zone
    const n_FrameworkLib::CPolygon cPolygon;
    const CPolygon xyBoundary;

    /** Whether a zone is keep-in, or if false, keep out*/
    const bool keepIn;

};