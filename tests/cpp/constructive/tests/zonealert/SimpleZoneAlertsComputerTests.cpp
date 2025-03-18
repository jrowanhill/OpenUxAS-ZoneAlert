/** Constructive Testing for SimpleZoneAlertComputer class
 * @author Jonathan Rowanhill
 * @see src/cpp/SimpleZoneAlertComputer.h
 */

#include <gtest/gtest.h> 

#include "SimpleZoneAlertComputer.h"
#include "RoutePlannerVisibilityService.h"
#include "afrl/cmasi/KeepInZone.h"
#include "afrl/cmasi/KeepOutZone.h"
#include "afrl/cmasi/Rectangle.h"
#include "afrl/cmasi/Circle.h"
#include "afrl/cmasi/Polygon.h"
#include "afrl/cmasi/Location3D.h"

#include <iostream>
#include <cstdarg>

using namespace zoneAlert;

double acceptedError = 0.000001;

/** BEHAVIORREGION: getLookaheadTime in relation to construction argument
*/


/**
 * CLAIM: getLookaheadTime returns the lookahead time passed to the SimpleZoneAlertComputer's constructor
 * RATIONALE: Four different SimpleZoneAlertComputers are tested for their 
 *   retrieved value of lookahead time. These values repesent small and large positive integers
 *   as well as zero and a negative integer within the value domain. Given the simplicity of the assignment
 *   and retrieval code and the coverage of different discerning categories within the integers, 
 *   it is reasonable to assume that if each such constructed SimpleZoneAlertComputer returns its respective
 *   value in the getLookaheadTime function, then it is reasonable
 *   to assume that all other assignable values will as well.
 * TODO: One could perform branch coverage analysis of all relevant
 * code and show that the test values cover all relevant behavior paths of the source code.
 * 
 */
TEST(SimpleZoneAlertComp, getLookaheadTimeIsCorrect) {

    int64_t val1 = 251;
    int64_t val2 = 154782373;
    int64_t val3 = 0;
    int64_t val4 = -3147756284756;

    SimpleZoneAlertComputer szac((int64_t)val1);
    EXPECT_EQ(val1, szac.getLookaheadTime());

    SimpleZoneAlertComputer szac2((int64_t)val2);
    EXPECT_EQ(val2, szac2.getLookaheadTime());

    SimpleZoneAlertComputer szac3((int64_t)val3);
    EXPECT_EQ(val3, szac3.getLookaheadTime());

    SimpleZoneAlertComputer szac4((int64_t)val4);
    EXPECT_EQ(val4, szac4.getLookaheadTime());
}

/** BEHAVIORREGION: acceptableLookaheadTime
*/

/** CLAIM: acceptableLookaheadTime returns true for all acceptable lookahead times
 *  Context: acceptableLookaheadTimes are all posistdargtive integer values supported by
 *           int64 
 *  RATIONALE: The function returns true for acceptable set lookahead times because
 *     the value stored in the ZoneAlertC   
 *  TODO: If padding has no influence then this can be rolled in to tests for all rectangles
 *  TODO: Why isn't padding doing anything for one of the zone types? I thought it did. Maybe 
 *    Only in one or the other route planner, confirm.
 */   
TEST(SimpleZoneAlertComp, detectsAcceptableTimes) {
    int64_t valid_1 = 1;
    int64_t valid_2 = 8947228489;

    SimpleZoneAlertComputer szac1((int64_t)valid_1);
    EXPECT_TRUE(szac1.acceptableLookaheadTime());

    SimpleZoneAlertComputer szac2((int64_t)valid_2);
    EXPECT_TRUE(szac2.acceptableLookaheadTime());
}

/** CLAIM: The acceptableLookaheadTime function returns FALSE for zero and all
 * negative time values
 *  RATIONALE: The rationale is symmetric to the case for
 * detctingAcceptableLookaheadTime with the addition of the value zero into the 
 * domain of values that should return FALSE from the function.
 * BUG: MUST MOCK internal value fetched from the class? * 
 * TODO: Branch-based code coverage claim with evidence
 */
TEST(SimpleZoneAlertComp, detectsUnacceptableLookaheadTimes) {

    int64_t invalid_1 = 0;
    int64_t invalid_2 = -431264;
    int64_t invalid_3 = -1;    

    SimpleZoneAlertComputer szac1((int64_t) invalid_1);
    EXPECT_FALSE(szac1.acceptableLookaheadTime());

    SimpleZoneAlertComputer szac2((int64_t) invalid_2);
    EXPECT_FALSE(szac2.acceptableLookaheadTime());

    SimpleZoneAlertComputer szac3((int64_t) invalid_3);
    EXPECT_FALSE(szac3.acceptableLookaheadTime());
}


/** BEHAVIORREGION: addZone
 * 
 * Accepts all legitimate zones
 * Doesn't distinguish correctly formatted zones from zones with problem data, doesn't check
 *   and can result in arbitrary behavior
 * The very first zone calling this function defines the origin of cartesian space as
 *    If Circle: Center of circle. If Rectangle: Center of Rectangle. If polygon: FIrst vertex in
 *      its vertex list
 * All other zones are relative to that defined origin and cartesian space and if too far away in 
 *      lat long will create distortions on the flat projection
 * Assumption: Can handle any number of zones added within intended memory usage, but other
 *      functions will degrade in performance
 * It transforms zones to cartesian coordinates exactly the same as RoutePlanner. @TODO: Can we prove this by pulling in that code and comparing zone data?
 * 
 * 
 * 
*/

/** 
 * Requirement: HL-1-2 CLAIMFAILED:
 * Rationale:  
 * 1 CLAIMFAILED: Both services apply the same source code on the same data in the same order
 *    1 CLAIMFAILED: SR-4: SUFFICIENT CLAIM: Both services identiically compute the zones as intermediate polygons on the same plane
 *       1CLAIM: Both services respond to each AbstractZone declaration declared by calling bFindPointsForGeometry
 *         1CLAIM: The RoutePlannerVisibiltiyService directly calls bFindPointsForABstractGeomrty
 *             1Evidence.EXAMIANTION
 *             2Evidence.UnitTest for call chain to bFindPointsForAbstractGeometry
 *         2CLAIM: The Zone Alert Service calls SimpleZoneAlertComputer that in turn calls bFindPointsForAbstractGeometry
 *             1Evidence.Examination of source code
 *             2Evidence.UnitTest for call chain to bFindPointsForAbstractGeometry
 *       2CLAIM: Both services store by zone id the resulting planar polygon for each declared zone
 *       3CONTEXT: Computation is zone order dependent, as the first encountered lat/long determines origin of the plane
 *       4 CLAIMFAILED: Both services process zones in the same order
 *               1Claim: Both services process zones in the order they are received
 *                  1Claim: Source code is message-event based  and declared zones are discrete messages
 *                     1Evidence.Examine source code that is message-receipt-based
 *                     2Evidence.Examine message type declarations
 *               2 CLAIMFAILED: Both services always receive declare zones in the same order
 *                  1 CLAIMFAILED: Each Service is single-threaded
 *                     UNSUPPORTED
 *                  2 CLAIMFAILED: Services receive in order messages at all agents if distributed arbitrarily
 *                     UNSUPPORTED
 *          2Claim: Both services compute the same plane on examples of zone input sequences
 *             1Evidence.Test: Tests for various collections of zones show same computed plane origins and relative orientations of points on plane from zone inputs
 *       3Claim: Both services compute same intermediate polygonal zones for some example input zones
 *           1Evidence.Tests: Example input sets of zones produce the same results in both algorithsm for intermediate data
 *    2 CLAIMFAILED: SR-6: Both services check and expand/merge zones using the same semantics
 *       1CLAIM: Both services wait until all relevent zones have been initially declared to do final zone check by calling 
 *          1CLAIM: Both services wait until all zone haves been declared to do final zone prep work
 *             1Claim: RoutePlannerVisibilityService waits until all zones used in a given OperatingRegion have been declared to 
 *                create final versions of those zones
 *                1Evidence.Examination: of code to process final zones for an operating region on an operating region declaration message
 *             2CLAIM: ZoneAlertService waits until all zones have been declared and the service is waiting for mission to start
 *                1Claim: The ZoneAlertService tgriggers final zone prep on the X message which is sent once when the system is ready to start mission activities
 *                   1Evidence.UnitTest: show examples that it triggers when X received, once, and not if X is not triggered
 *                   2Evidence.Examination: of the source code
 *       2 CLAIMFAILED: Both services identically check intemediate polygonal zones and expand and merge them for service use after received final event
 *         1 CLAIMFAILED: Both services call the same code on the same intermediate zones
 *            1Claim: Both services call errFinalizePolygons after their activating event
 *               1Evidence.UnitTest showing call by each after respective events
 *               2Evidence.Examination of source code flow of event handlers
 *            2 CLAIMFAILED: Both services call errFinalizePolygons with the same zones
 *               CONTRADICTED: if the declared operating zone does not use all declared zones
 *               CONTRADICTED: if more than one operating region is declared
 *         2Claim: Both services get the same results for examples check all stored intermediate zones 
 *               2Evidence.Test Unit test on Zone Alert code and RoutePlanenr for equivalent results
 *       3 CLAIMFAILED: Both services finish                                        preparing final zones for service before their servies are required in mission
 *             1 COUNTEREXAMPLE: The system waits for routes before it starts but will not wait for zone alert to prep and declare zones before
 *                   it executes
 * 2CLAIM: Both services produce the same final zones for use by their respective services for examples of zones
 *    1Evidence.Test.DataInjection into the algorithm show equivalence for the two core services
 * 
 */

/*
 * Requirement: HL-1-3 CLAIMFAILED: CORRECT AND ACCURATE ZONE COMPUTATION
    TBD
 * Rationale:
 * HL-1-3-1. Zone Geomtry applied is sufficiently correct and accurate
 * HL-1-3-2. Comkputation of immediate conflicts is corret and accurate
 * HL-1-3-3. Computation of impending conflicts is correct and accurate for linear interpolation standards
 *
 */

 /* 
 * HL-1-3-1: CLAIM: Computation of zone geometry is correct and accurate
 * 
 * RATIONALE:
 *
 * 1CLAIM: 
 * 
 * 
 * 
 */

 /* 
 * 
 * Some of the correctness gunk below might be useful 
 * 1 CLAIMFAILED: Both services apply the same algorithm and data to process zones for use in Route Planning and Zone Alerts
 *    1Context: Description of the algorithm: 1) Create a plane tangent to the earth with origin based on first lat/long found in processing declared AbstractZones
 *       with the plane oriented on lat (x) /long (x) at the plane's origin. 2) Convert all declared AbstractZones into polygons on that plane
 *       3) Check all of the zones defined as polygons on the plane to make sure they are not degenerate, are oriented properly, and are regular.
 *         If any is not, do not create any final zones for the operating region.
 *       4) Merge all keep-in zones against overlap using Visilibity all buffer expand and merge all keep-out zones for overlap using Visilibity
 *    1 CLAIMFAILED: SR-4: SUFFICIENT CLAIM: Both services identiically compute the zones as intermediate polygons on the same plane
 *       1CLAIM: Both services respond to each AbstractZone declaration declared by calling bFindPointsForGeometry
 *         1CLAIM: The RoutePlannerVisibiltiyService directly calls bFindPointsForABstractGeomrty
 *             1Evidence.EXAMIANTION
 *         2CLAIM: The Zone Alert Service calls SimpleZoneAlertComputer that in turn calls bFindPointsForAbstractGeometry
 *             1Evidence.Examination of source code
 *             2Evidence.UnitTest for call chain to bFindPointsForAbstractGeometry
 *       2CLAIM: BFindPointsForGeometry performs conversion of AbstractZones into anplaner polygon zone representation
 *       1 CLAIMFAILED: Both services identically compute the plane on which to project zones
 *         1 CLAIMFAILED: Both services use the same deterministic algorithm to compute the plane tangent to a lat/long and its coordinates
 *            1Claim: Both services take the first refered lat long of the first declared and received abstract zone and make that the origin of the plane with north pointed to north pointed on latitude axis at origin and and east pointed on longitudinal axis at origin
 *               1Claim: planar conversion in one specific function that takes lat long as input and uyses first input on execution of the system as declared origin
 *                  1Evidence: See source code of both services and note the call to X function
 *               2Claim: that function notes the first call in its execution and for that case sets the origin of the plane by the received lat long
 *                  1Evidence.Examine source code of the function and self evidence
 *                  2Evidence.Test case showing first call sets planar origin lat/long and all later call are relative to that origin
 *               3Claim: that function always converts lat and long as y and x tangents, respectively, to the lat and long at the origin on the tangent plane
 *                  1Evidence.Examine the source code as reader in the coinversion funtion
 *                  2Evidence.Test: Some example coordinate conversion cases showing they conform to expecte results for lat/long relative to the origin comp
 *            2 CLAIMFAILED: Both services process zones in the same order
 *               1Claim: Both services process zones in the order they are received
 *                  1Claim: Source code is message-event based  and declared zones are discrete messages
 *                     1Evidence.Examine source code that is message-receipt-based
 *                     2Evidence.Examine message type declarations
 *               2 CLAIMFAILED: Both services always receive declare zones in the same order
 *                  1 CLAIMFAILED: Each Service is single-threaded
 *                     UNSUPPORTED
 *                  2 CLAIMFAILED: Services receive in order messages at all agents if distributed arbitrarily
 *                     UNSUPPORTED
 *          2Claim: Both services compute the same plane on examples of zone input sequences
 *             1Evidence.Test: Tests for various collections of zones show same computed plane origins and relative orientations of points on plane from zone inputs
 *       2Claim: Both services identically compute zones as lists of polygon vertices on the defined plane
 *          1Claim: Both services use the same deterministic algorithm and data input order
 *             1Claim: Both services identically convert each received Zone AbstractGeometry into a regular polygon with a list of vertices in the defined plane
 *                SR-4-3-2-1: Both services apply bFindPointsForAbstractGeomrtry to convert abstract geometry to polygons on the plane
 *                   SR-4-3-2-1.Evidence1.Examine source code to see how both call this function on input zones as the first thing they do with a received input zone
 *                   SR-4-3-2-1.Evidence2.UnitTests show both systems call this first thing and  once on each received zone
 *                2Claim: Both services get the same results for intermediately stored polygons for same AbstractZoneInputs
 *                   1Claim: same results for CircleZone
 *                      1Evidence.Test test case for various circles
 *                   2Claim: same results for RectangleZone
 *                      1Evidence.Test test case for various rectangles  
 *                   3Claim: same results for PolygonZone
 *                      1Evidence.Test test case for various polygons
 *                   4Claim: same results for any other zone type not listed above
 *                      1Evidence.Test test case for other shape type
 *                   5Claim: Both services get same results for various examples of mixed AbatractZone inputs
 *                      1Evidence.Test test case for example collections of shape
 *                3AWAYCLAIM: Both services process zone inputs in the order
 *       3Claim: Both services compute same intermediate polygonal zones for some example input zones
 *           1Evidence.Tests: Example input sets of zones produce the same results in both algorithsm for intermediate data
 *    2CLAIM: SR-6: Both services check and expand/merge zones using the same semantics
 *       1CLAIM: Both services wait until all relevent zones have been initially declared to do final zone check by calling 
 *          1CLAIM: Both services wait until all zone haves been declared to do final zone prep work
 *             1Claim: RoutePlannerVisibilityService waits until all zones used in a given OperatingRegion have been declared to 
 *                create final versions of those zones
 *                1Evidence.Examination: of code to process final zones for an operating region on an operating region declaration message
 *             2CLAIM: ZoneAlertService waits until all zones have been declared and the service is waiting for mission to start
 *                1Claim: The ZoneAlertService tgriggers final zone prep on the X message which is sent once when the system is ready to start mission activities
 *                   1Evidence.UnitTest: show examples that it triggers when X received, once, and not if X is not triggered
 *                   2Evidence.Examination: of the source code
 *       2Claim: Both services identically check intemediate polygonal zones and expand and merge them for service use after received final event
 *         1Claim: Borht services call the same code on the same intermediate zones
 *            1Claim: Both services call errFinalizePolygons after their activating event
 *               1Evidence.UnitTest showing call by each after respective events
 *               2Evidence.Examination of source code flow of event handlers
 *            2 CLAIMFAILED: Both services call errFinalizePolygons with the same zones
 *               CONTRADICTED: if the declared operating zone does not use all declared zones
 *               CONTRADICTED: if more than one operating region is declared
 *         2Claim: Both services get the same results for examples check all stored intermediate zones 
 *               2Evidence.Test Unit test on Zone Alert code and RoutePlanenr for equivalent results
 *       3 CLAIMFAILED: Both services finish preparing final zones for service before their servies are required in mission
 *             1 COUNTEREXAMPLE: The system waits for routes before it starts but will not wait for zone alert to prep and declare zones before
 *                   it executes
*/

/** Requirement: SR-4-3-2-1
 * 
 * RATIONALE:
 * CLAIM: 1. RoutePLannerVisibiltiyService transforms geometry to the plane with a clear method, removes duplicate vertices in some
 * known order if generated polygon has any two vertices closer than 1 meter in separation, then checks for polygon simplicity of the 
 * polygon with vertices of closer than 1 meter removed, where the polygon considers two points equivalent that are 
 * less than 1*10^-8 meters apart. If any such polygon encountered is not simple, the entire operating zone of regions is rejected.
 * It then merges keep out zones and simultaneously expands them if they have positive padding distances declared with them. 
 * It then merges all keep in zones but does not perform any shrinking or expansion of them, even if a padding value is provided with a given 
 * zone declaration. It then eliminates all duplicate vertices that are within 1 meter of eachother for all resulting
 * zone polygons and stores the result to generate the visibility graph for routing.
 * 
 * EVIDENCE: 1.1. Direct readthrough of code by engineers followed by signed agreement. 
 * CLAIM: 2. Zone Alert does the same as the above
 * STRATEGY: 2: Show that ZoneAlert performs the steps above in the same order with the same functions
 * CLAIM: 2.1. The RoutePlannerVisbilityService converts a declared zone into a VisibilityGraph::CPolygon, this
 * stores the declared zone geometry into polygon vertices, along with storage of the zones type and 
 * padding.
 * EVIDENCE: 2.1.1. Review and agrement by at least one other engineer with signoff at time of this work
 * CLAIM: 2.2. The SimpleZoneAlertComputer does the equivalent work by converting the declared zone geometry to 
 * points in the x-y plane using the same computational function code, resulting in the same function.
 *   RATIONALE: 2.2
 *      CLAIM: 2.2.1. The code was copied directly
 *      ASSUMPTION: 2.2.1. RoutePlannerVisibilityService code is not changed after  claim 1
 *      CLAIM: 2.2.2. The functionality of the code is to produce polygons as specified in that function from the 
 *        abstract geometry types of circle, rectangle, and polygon, with geometry converted into the x-y plane in meter positions
 *        relative to an origin that is at the first declared lat/long coordinate for the first declared zone.
 *         STRATEGY: 2.2.2. Show for circle, rectangle, and polygon declared zone types, each
 *            CLAIM: 2.2.2.1: The functionality to produce polygons from a declared circle zone is equivalent to that
 *                     the RoutePlannerVisibilityService
 *              STRATEGY: 2.2.2.1. Show correct position and radius for being first declared zone and not for various positions and radii
 *                  JUSTIFICATION: 2.2.2.1. These are the only variables for a circle zone translation's behavior
 *                     CLAIM: 2.2.2.1.1: When a circle is the first zone, then the origin is x and radius results in inscribed 
 *                        circle of the given radius for x points starting at 0 radians, and for every x radians
 *                     CLAIM: 2.2.2.1.2: When a circle is not the first zone, its center is realtive to the origin based on their
 *                        latitudes and longitidues usiung the samne projection logic
 *                          EVIDENCE: Uses equivalent code (calls same code)
 *                     CLAIM: 2.2.2.1.3: A declared circle has the correct radius for generated points on the circle from its center and the x-y planes origin
 *                          EVIDENCE: 2.2.2.1.3.1: Test cases
*             CLAIM: 2.2.2.2: the functionality to produce polygons from declared rectangle zones ...

             
 *                              
 *                     
 *            CLAIM: 2.2.2.2: 
 * CLAIM: 2. The Route checks for degeneracy of zones and rejects all zones if one or more is degenerate
 *      EVIDENCE: READER INSPECTION
 *      EVIDENCE: SIGN OFF oF MORE THAN ONE ENGINEER
 * CLAIM  3. The Zone AlertService also rejects all zones if one or more is dengerate
 *   FAILURE: Degenerate zones are produced and stored as zones where as DEGNERATE ZONES WILL NOT BE DECLARED FOR THE USE CASES, as such zones are disregarded by the 
 *    ROUTEPLANNERVISIBILITY SERVICE BUT ALLOWED BY THE ZONE ALERTING SERVICE
 *   EVIDENCE: TEST CASE below
 * CLAIM 4. THe RoutePlannerVisibilityService checks that all zones are not irregular or dengerate with an 
 *   epsilon separtion of 1 * 10 ^-8 for vertex separation
 *    TODO: check if also true for non-same points on all line segments
 * CLAIM 5: The 
 */


/** Class Stub to get at Protected Memebrs of SimpleZoneAlertComputer
 */
class AccessibleRoutePlanner : public uxas::service::RoutePlannerVisibilityService
{
    public:
        using uxas::service::RoutePlannerVisibilityService::bFindPointsForAbstractGeometry;

        AccessibleRoutePlanner() : uxas::service::RoutePlannerVisibilityService() {}
};

AbstractZone * makeRectangleZone(int id, bool keepIn, 
                    double centerLat, double centerLong, double centerAlt,
                    double width, double height, double rotation, 
                    double padding, 
                    double minAlt=0, double maxAlt=0, 
                    int64_t startTime = 0, int64_t endTime = 0,
                    std::vector<int> affectedAircraft = {} )
{

    Location3D *centerLocation1Ptr = new Location3D();
    centerLocation1Ptr->setAltitude(centerAlt);
    centerLocation1Ptr->setAltitudeType(afrl::cmasi::AltitudeType::MSL);
    centerLocation1Ptr->setLatitude(centerLat);
    centerLocation1Ptr->setLongitude(centerLong);

    Rectangle *rectangle1Ptr = new Rectangle();
    rectangle1Ptr->setCenterPoint(centerLocation1Ptr);
    rectangle1Ptr->setHeight(height);
    rectangle1Ptr->setWidth(width);
    rectangle1Ptr->setRotation(rotation);

    AbstractZone *zone;

    if (keepIn) {
        zone = new KeepInZone();
    }
    else {
        zone = new KeepOutZone();
    }        

    zone->setZoneID(id);
    zone->setBoundary(rectangle1Ptr);
    zone->setMinAltitude(minAlt);
    zone->setMinAltitudeType(afrl::cmasi::AltitudeType::MSL);
    zone->setMaxAltitude(maxAlt);
    zone->setMaxAltitudeType(afrl::cmasi::AltitudeType::MSL);

    return zone;
}

/** Zone testing afrl::cmasi:Exactly the same as RoutePlanner.
 */
class BasicZoneChecks  : public testing::Test {
    
  protected:
    
    BasicZoneChecks() {};


    void  SetUp() override {
        // setup square zone
        //arpPtr = new AccessibleRoutePlanner();


        // the same rectangle but moves slightly
        /*rectKeepInZone2 = (KeepInZone*) makeRectangleZone(2, true, // zone 1 is keep in
                    100.0, 100.0, 5000.0, // center lat long in radians with alt
                    300.0, 500.0, 0.0, // width and length
                    20.0,              // padding
                    8000.0, 10000.0,  // zone altitudes
                    250.0, 26542.0,   // start and end times
                    std::vector<int> {1, 2});
        */


    };

    void TearDown() override {
        //delete arpPtr;
        //delete rectKeepInZone1; 
        //delete rectKeepInZone2;
    };

    //AccessibleRoutePlanner *arpPtr;

    KeepInZone *rectKeepInZone1;
    KeepInZone *rectKeepInZone2;

};


/** 
 *   Checking basic geometry transformation of keep in rectangles
 * CLAIM: Rectangle-geometry zones are correctly represented near the equator and Grenwich line
 * with no influence from zone padding, type (in our out), nor any altitudealtitude claims on geometry nor zone
 * have 
 */
TEST_F(BasicZoneChecks, bFindPointsForAbstractGeometryCorrectForZoneRectangles) {

    n_FrameworkLib::V_POSITION_t pointVector;
    
    double SX = 300;
    double SY = 500;

    double X = SX/2;
    double Y = SY/2;    

    //--check resulting cartesian geometry of an unrotated rectangle at 0 Lat, 0 Long
    AbstractZone * rectKeepInZone1 = (KeepInZone*) makeRectangleZone(1, true, // zone 1 is keep in
                    0.0, 0.0, 5000.0, // center lat long in degrees with alt
                    SX, SY, 0.0, // width and length in meters and rotation in degrees
                    20.0,              // padding
                    8000.0, 10000.0,  // zone altitudes
                    250.0, 26542.0,   // start and end times
                    std::vector<int> {1, 2});

    bool result = AccessibleRoutePlanner::bFindPointsForAbstractGeometry(rectKeepInZone1->getBoundary(),
                                pointVector);
    EXPECT_TRUE(result);

    //--expect basic rectangle centered at origin and not lat long given
    // and padding is ignored
    EXPECT_EQ(4, pointVector.size());

    EXPECT_NEAR(X, pointVector[0].m_east_m, acceptedError);
    EXPECT_NEAR(Y, pointVector[0].m_north_m, acceptedError);
    EXPECT_NEAR(0, pointVector[0].m_altitude_m, acceptedError); // expect 0 altitude

    EXPECT_NEAR(-X, pointVector[1].m_east_m, acceptedError);
    EXPECT_NEAR(Y, pointVector[1].m_north_m, acceptedError);
    EXPECT_NEAR(0, pointVector[1].m_altitude_m, acceptedError); // expect 0 altitude

    EXPECT_NEAR(-X, pointVector[2].m_east_m, acceptedError);
    EXPECT_NEAR(-Y, pointVector[2].m_north_m, acceptedError);
    EXPECT_NEAR(0, pointVector[2].m_altitude_m, acceptedError); // expect 0 altitude

    EXPECT_NEAR(X, pointVector[3].m_east_m, acceptedError);
    EXPECT_NEAR(-Y, pointVector[3].m_north_m, acceptedError);
    EXPECT_NEAR(0, pointVector[3].m_altitude_m, acceptedError); // expect 0 altitude

    //--check same rectangle rorated 45 degrees clockwise
    // and padding is ignored
    AbstractZone * rectKeepOutZone2 = (KeepInZone*) makeRectangleZone(2, false, // zone 2 is keep in
                    0.0, 0.0, 5000.0, // center lat long in degrees with alt
                    SX, SY, -45.0, // width and length and rotation in degrees clockwise
                    20.0,              // padding
                    8000.0, 10000.0,  // zone altitudes
                    250.0, 26542.0,   // start and end times
                    std::vector<int> {1, 2});

    pointVector.clear();

    result = AccessibleRoutePlanner::bFindPointsForAbstractGeometry(rectKeepOutZone2->getBoundary(),
                                pointVector);

    // NOW TEST THE ROTATED RECTANGLE ROTATED CLOCKWISE by 90 degrees
    EXPECT_TRUE(result);

    //--expect basic rectangle centered at origin and not lat long given
    EXPECT_EQ(4, pointVector.size());

    //double F = 0.7071067812;
    //double R = sqrt((X*X)+(Y*Y));

    double A = 45.0 * (M_PI/180.0);
    
    EXPECT_NEAR((X*cos(A))-(Y*sin(A)), pointVector[0].m_east_m, acceptedError);
    EXPECT_NEAR((X*sin(A))+(Y*cos(A)), pointVector[0].m_north_m, acceptedError);
    EXPECT_NEAR(0, pointVector[0].m_altitude_m, acceptedError); // expect 0 altitude

    EXPECT_NEAR((-X*cos(A))-(Y*sin(A)), pointVector[1].m_east_m, acceptedError);
    EXPECT_NEAR((-X*sin(A))+(Y*cos(A)), pointVector[1].m_north_m, acceptedError);
    EXPECT_NEAR(0, pointVector[1].m_altitude_m, acceptedError); // expect 0 altitude

    EXPECT_NEAR((-X*cos(A))-(-Y*sin(A)), pointVector[2].m_east_m, acceptedError);
    EXPECT_NEAR((-X*sin(A))+(-Y*cos(A)), pointVector[2].m_north_m, acceptedError);
    EXPECT_NEAR(0, pointVector[2].m_altitude_m, acceptedError); // expect 0 altitude

    EXPECT_NEAR((X*cos(A))-(-Y*sin(A)), pointVector[3].m_east_m, acceptedError);
    EXPECT_NEAR((X*sin(A))+(-Y*cos(A)), pointVector[3].m_north_m, acceptedError);
    EXPECT_NEAR(0, pointVector[3].m_altitude_m, acceptedError); // expect 0 altitude

    //--check same rectangle with no rotation offset slightly in longitude
    // and padding is ignored
    double longitude1 = 0.01;
    AbstractZone * rectKeepInZone3 = (KeepInZone*) makeRectangleZone(3, true, // zone 3 is keep in
                    0.0, longitude1, 5000.0, // center just a little further west from other rectangles
                    SX, SY, 0.0, // width and length and rotation in degrees clockwise
                    20.0,              // padding
                    8000.0, 10000.0,  // zone altitudes
                    250.0, 26542.0,   // start and end times
                    std::vector<int> {1, 2});

    pointVector.clear();

    result = AccessibleRoutePlanner::bFindPointsForAbstractGeometry(rectKeepInZone3->getBoundary(),
                                pointVector);

    // NOW TEST A DISPLACED RECTANGLE Given that the Cartesian coordinates are centered on the 
    // first rectangle we declared
    EXPECT_TRUE(result);

    //--expect basic rectangle centered at origin and not lat long given
    EXPECT_EQ(4, pointVector.size());

    //double F = 0.7071067812;
    //double R = sqrt((X*X)+(Y*Y));

    //double A2 = 45.0 * (M_PI/180.0);

    double metersPerDegreeLongitudeAtEquator = 111300; // source: internet :p

    double dX = metersPerDegreeLongitudeAtEquator*longitude1;

    double roughEstimate = 0.5; // half a meter this way or that

    EXPECT_NEAR(X + dX, pointVector[0].m_east_m, roughEstimate);
    EXPECT_NEAR(Y, pointVector[0].m_north_m, acceptedError);
    EXPECT_NEAR(0, pointVector[0].m_altitude_m, acceptedError); // expect 0 altitude

    EXPECT_NEAR(-X +dX, pointVector[1].m_east_m, roughEstimate);
    EXPECT_NEAR(Y, pointVector[1].m_north_m, acceptedError);
    EXPECT_NEAR(0, pointVector[1].m_altitude_m, acceptedError); // expect 0 altitude

    EXPECT_NEAR(-X +dX, pointVector[2].m_east_m, roughEstimate);
    EXPECT_NEAR(-Y, pointVector[2].m_north_m, acceptedError);
    EXPECT_NEAR(0, pointVector[2].m_altitude_m, acceptedError); // expect 0 altitude

    EXPECT_NEAR(X +dX, pointVector[3].m_east_m, roughEstimate);
    EXPECT_NEAR(-Y, pointVector[3].m_north_m, acceptedError);
    EXPECT_NEAR(0, pointVector[3].m_altitude_m, acceptedError); // expect 0 altitude

    delete rectKeepInZone1;
    delete rectKeepOutZone2;
    delete rectKeepInZone3;

}

/** Test Rectangular Zone Translation Relative to First Declared Zone Point */

/** Test Rectangular Geometry Matches that of RoutePlannerVisibilityService before VisbilityGraph creation 
 * 
 * TODO: When do we think about equivalence with padding? 
 * NOTE: BOTH OUTPUT BIND POITNS IN PLANE WITHOUT PADDING. THAT IS APPLIED LATER IN ROUTE PLANNER
 */



Location3D * loc(double latitude, double longitude, double altitude =0.0) {

    Location3D * l = new Location3D();
    l->setLatitude(latitude);
    l->setLongitude(longitude);
    l->setAltitude(altitude);
    l->setAltitudeType(afrl::cmasi::AltitudeType::MSL);

    return l;
}


std::vector<Location3D*> * verts( int count,  ... ) {

    std::vector<Location3D*> *verticesVector = new std::vector<Location3D*>();

    //args.x;
    va_list args;
    va_start(args, count);
    for (int i = 0; i < count; i++) {
        Location3D *loc = va_arg(args, Location3D*);
        verticesVector->push_back(loc);
    }
    va_end(args);

    return verticesVector;

} 


AbstractZone * makePolygonZone(int id, bool keepIn, 
                    std::vector<Location3D*> *vertices,
                    double padding, 
                    double minAlt=0, double maxAlt=0, 
                    int64_t startTime = 0, int64_t endTime = 0,
                    std::vector<int> affectedAircraft = {} )
{

    Polygon *polygonPtr = new Polygon();
    polygonPtr->getBoundaryPoints() = *vertices;
    
    delete vertices;

    AbstractZone *zone;

    if (keepIn) {
        zone = new KeepInZone();
    }
    else {
        zone = new KeepOutZone();
    }        

    zone->setZoneID(id);
    zone->setBoundary(polygonPtr);
    zone->setMinAltitude(minAlt);
    zone->setMinAltitudeType(afrl::cmasi::AltitudeType::MSL);
    zone->setMaxAltitude(maxAlt);

    return zone;
}


/** Checks Basic Geometry for Polygon Zones
 *  
 * CLAIM: Polygon zones are correctly computed by bFindPointsForAbstractGeometry
 * near 0 latitude and longitude, and zone type, zone padding and altitude 
 * information of any kind does not affect the resulting output geometry.
 * DEFINITION: Correct computation is points on a horizontal plane oriented north and east
 *   with plane-defining vector being the radial vector from the earth at the first 
 *   latitude and longitude of the first computed polygon's vertices.
 * RATIONALE: A few tests with simple computations near the equator and Grenwich line
 * appear to be sufficiently accurate.
 * 
 * */ 
TEST_F(BasicZoneChecks, bFindPointsForAbstractGeometryCorrectForZonePolygons) {
    
    n_FrameworkLib::V_POSITION_t pointVector;
    
    //--expect a basic triangle with the relative coordinates based on a simple flat projection to earth

    double deg1 = 0.001;

    AbstractZone * triangleZone1 = (KeepInZone*) makePolygonZone(1, false, // zone 1 is keep out
                    verts(3, loc(deg1, 0, 1000), loc(0, -deg1, 1000), loc(0, deg1, 1000)),
                    20.0,              // padding
                    8000.0, 10000.0,  // zone altitudes
                    250.0, 26542.0,   // start and end times
                    std::vector<int> {1, 2});

    bool result = AccessibleRoutePlanner::bFindPointsForAbstractGeometry(triangleZone1->getBoundary(),
                                pointVector);
    EXPECT_TRUE(result);

    double metersPerDegreeLongitudeAtEquator = 111300; // source: internet :p
    double metersPerDegreeLatitudeAtEquator = 111100; // source: internet :p

    double X = metersPerDegreeLongitudeAtEquator*deg1;
    double Y = metersPerDegreeLatitudeAtEquator*deg1;

    double roughEstimate = 0.6; // half a meter this way or that

    EXPECT_EQ(3, pointVector.size());

    EXPECT_NEAR(0, pointVector[0].m_east_m, roughEstimate);
    EXPECT_NEAR(Y, pointVector[0].m_north_m, roughEstimate);
    EXPECT_NEAR(0, pointVector[0].m_altitude_m, acceptedError); // expect 0 altitude

    EXPECT_NEAR(-X, pointVector[1].m_east_m, roughEstimate);
    EXPECT_NEAR(0, pointVector[1].m_north_m, roughEstimate);
    EXPECT_NEAR(0, pointVector[1].m_altitude_m, acceptedError); // expect 0 altitude

    EXPECT_NEAR(X, pointVector[2].m_east_m, roughEstimate);
    EXPECT_NEAR(0, pointVector[2].m_north_m, roughEstimate);
    EXPECT_NEAR(0, pointVector[2].m_altitude_m, acceptedError); // expect 0 altitude

    delete triangleZone1;

    pointVector.clear();


    //-----test a relatively small, globe-projected pentagram as it appears on a plane near the equator.

    double del = (2.0*M_PI)/5.0;
    double st = (1.0/4.0)*(2.0*M_PI);

    AbstractZone * pentaZone2 = (KeepInZone*) makePolygonZone(1, false, // zone 1 is keep out
                    verts(5, 
                      loc(deg1*sin(st),         deg1*cos(st), 1000), 
                      loc(deg1*sin(st+del),     deg1*cos(st+del), 1000), 
                      loc(deg1*sin(st+(2*del)), deg1*cos(st+(2*del)), 1000),
                      loc(deg1*sin(st+(3*del)), deg1*cos(st+(3*del)), 1000),
                      loc(deg1*sin(st+(4*del)), deg1*cos(st+(4*del)), 1000)
                     ),
                    20.0,             // padding
                    8000.0, 10000.0,  // zone altitudes
                    250.0, 26542.0,   // start and end times
                    std::vector<int> {1, 2});

    result = AccessibleRoutePlanner::bFindPointsForAbstractGeometry(pentaZone2->getBoundary(),
                                pointVector);
    EXPECT_TRUE(result);
    
    EXPECT_EQ(5, pointVector.size());

    EXPECT_NEAR(X*cos(st), pointVector[0].m_east_m, roughEstimate);
    EXPECT_NEAR(Y*sin(st), pointVector[0].m_north_m, roughEstimate);
    EXPECT_NEAR(0, pointVector[0].m_altitude_m, acceptedError); // expect 0 altitude

    EXPECT_NEAR(X*cos(st+del), pointVector[1].m_east_m, roughEstimate);
    EXPECT_NEAR(Y*sin(st+del), pointVector[1].m_north_m, roughEstimate);
    EXPECT_NEAR(0, pointVector[1].m_altitude_m, acceptedError); // expect 0 altitude

    EXPECT_NEAR(X*cos(st+(2*del)), pointVector[2].m_east_m, roughEstimate);
    EXPECT_NEAR(Y*sin(st+(2*del)), pointVector[2].m_north_m, roughEstimate);
    EXPECT_NEAR(0, pointVector[2].m_altitude_m, acceptedError); // expect 0 altitude

    EXPECT_NEAR(X*cos(st+(3*del)), pointVector[3].m_east_m, roughEstimate);
    EXPECT_NEAR(Y*sin(st+(3*del)), pointVector[3].m_north_m, roughEstimate);
    EXPECT_NEAR(0, pointVector[3].m_altitude_m, acceptedError); // expect 0 altitude

    EXPECT_NEAR(X*cos(st+(4*del)), pointVector[4].m_east_m, roughEstimate);
    EXPECT_NEAR(Y*sin(st+(4*del)), pointVector[4].m_north_m, roughEstimate);
    EXPECT_NEAR(0, pointVector[4].m_altitude_m, acceptedError); // expect 0 altitude

}

/** Test Polygonal Zone Translation Relative to First Declared Zone Point */

/** Test Polygonal Geometry Matches that of RoutePlannerVisibilityService before VisbilityGraph creation 
 * 
 * TODO: When do we think about equivalence with padding? 
 * NOTE: BOTH OUTPUT BIND POITNS IN PLANE WITHOUT PADDING. THAT IS APPLIED LATER IN ROUTE PLANNER
 */



/** Test correct geometry for cicular zones projected onto the x-y horizontal plane
 * A. Polygon with all circle inside the polygon if keep-out, Polygon inside the circle if it is keep-in 
 *    (conservative polygonal estimate for safety semantics)
 * 
 * PROBLEMSFORESEEN: THIS WILL FAIL FOR KEEP-OUT ZONES AS IT ALWAYS DOES INTERNAL POLYGON (VERTICES ON THE CIRCLE)
 *  FOR ALL ZONE TYPES. THIS SHOULD HAVE A TEST WE SHOW FAILS AND REPRESENTS A BUG IN THE CODE BOTH FOR THIS
 *  AND ROUTEPLANNINGVISIBILITYSERVICE. THIS IS AN EXMAPLE OF TDD USAGE TO SHOW FAILING PROPERTY OF CURRENT SYSTEM
 * 
 * NOTE: We discovered this bug while reverse engineering safety requirments for the RoutePlanningVisibilityService in a 
 * previous sub-project for ASTRA or CRDiNAL (forget which)
 */

/** Test Circular Translation Relative to First Declared Zone Point */

/** Test Circular Geometry Matches that of RoutePlannerVisibilityService before VisbilityGraph creation 
 * 
 * TODO: When do we think about equivalence with padding? 
 * NOTE: BOTH OUTPUT BIND POITNS IN PLANE WITHOUT PADDING. THAT IS APPLIED LATER IN ROUTE PLANNER
 */

/** Test Mixed Geometry Scene Example Equivalence with RoutePlanner BindPoints
 * 
 * TODO: When do we think about equivalence with padding? 
 * NOTE: BOTH OUTPUT BIND POITNS IN PLANE WITHOUT PADDING. THAT IS APPLIED LATER IN ROUTE PLANNER
 * 
 */



/** CLAIM: After ALL zones are declared, and before Zone Alerting is required, all zones are successfully
 * merged with overlapping zones of the same type (keep-in or keep-out). The result is a set of merged keep in zones
 * generated from the original zones calcualted for the cartesian plan, and likewise for keep-out zones.
 * 
 * IF WE ARE USING THE Existing ROUTE Planner Visilibity Service merge code, resulting zones should be equivalent!
 * IF WE ARE NOT, THEN Existing ROUTE PLANNER Visilibity Service merge zones should not be equjivalent but similar.
 * 
 * PROBLEM: ORDER OF VERTEX AND POLYGONS ENTERED INTO MERGING EFFECTS RESULTS FOR OUR ALGORITHM. IT MIGHT ALSO FOR 
 * THE VISILIBITY ONE, SO MERGE RESULTS MIGHT NOT BE IDENTICAL IF WE MERGE insert VERTICES / ZONES IN A DIFFERENT ORDER
 * 
 * PROBLEM: CAN SET MEMBERS BE TOUCHING? 
 * 
 * RATIONALE: TBD, you get the gist above. TEST CASES WOULD BE BELOW
 * 
 */


/** CLAIM: THE ROUTE PLANNING SERVICE EMITS THE SET OF MERGED ZONES WITH NEW IDS , ETC SEE REQUIREMENTS */

/** CLAIM: THE ROUTE PLANNING SERVICE REPORTS WHEN A VEHICLE IS IN CURRENT CONFLICT WITH ANY GIVEN MERGED ZONE */

/** CLAIM: Requiremnt for Keep-Out existing violation is satisfied */

/** CLAIM: Requiremnt for Keep-In existing violation is satisfied */

/** CLAIM: Requirement about Imminetnt violation reporting */

/** CLAIM: Requirement about Keep-out imminent violation reporting*/

/** CLAIM: Requirement about Keep-in imminent violation reporting*/


/** CLAIM: THE Route Planning service correctly reports existing and imminent zone alerts that match route planning zone geometry 
 * and only declares if they should occur and never when they aren't semantically occuring.
 * 
 * RATIONALE: SAME STORED GEOMETRY, AND CORRECT EXISTING AND IMMINENT CALCULATIONS WITH CORRECT REPORTING HOOKS
 * TESTS ABOVE SUPPORT. THIS LIKELY EXISTS AT ARGUMENT LEVEL
 * 
 * ALSO SCENARIOS ARE RUN AS DIRECT EVIDENCE SUPPORTING THIS FOR VARIOUS CASES AND CORNER CASES
 *   FOR EXISTING AND IMMINENT DETECTIONS RELATIVE TO ROUTES PLANNED ON SAME ANNOUNCED ZONES
 * 
 * THIS SHOULD BE A REQUIREMENT IN THE HIERARCH HIGH UP
 * THIS ARGUMENT SHOULD LIKELY BE FAR UP THE GSN AS THIS IS THE ESSENTIAL CORRECTNESS ARG.
 * 
*/




class MockCPolygon :CPolygon {
    /**
    int& iGetID(){return(m_iID);};
    const int& iGetID()const{return(m_iID);};    
    **/
    //MOCK_METHOD();


};


/** Creates a SimpleZoneAlertComputer set up with a bunch of keep in and keepout CPolygon Mocks to 
 *  test against for interaction between CPolygon zones and ZoneAlertComputer 
 */
class MockZonesSetup : public testing::Test {


    protected:

        MockZonesSetup() {};

        void SetUp() override {
            computerPtr = new SimpleZoneAlertComputer(1.0);

            // create a set of mock keep out and keep in zones for the polygon





        };

        void TearDown() override {
            delete computerPtr;
        };


        SimpleZoneAlertComputer *computerPtr;
};


/** A test harness that sets up a ZoneAlertComputer with some typical zones against
 * which to test vehicle existing and imminent zone violations
 */
class SimpleZonesSetup  : public testing::Test {
    
    protected:
      
      SimpleZonesSetup() {};
  
  
      void  SetUp() override {

        // create a new zone alert computer against which to make calls
        computerPtr = new SimpleZoneAlertComputer(1.0);
        

          // setup square zone
          //arpPtr = new AccessibleRoutePlanner();
  
  
          // the same rectangle but moves slightly
          /*rectKeepInZone2 = (KeepInZone*) makeRectangleZone(2, true, // zone 1 is keep in
                      100.0, 100.0, 5000.0, // center lat long in radians with alt
                      300.0, 500.0, 0.0, // width and length
                      20.0,              // padding
                      8000.0, 10000.0,  // zone altitudes
                      250.0, 26542.0,   // start and end times
                      std::vector<int> {1, 2});
          */
  
  
      };
  
      void TearDown() override {
          //delete arpPtr;
          //delete rectKeepInZone1; 
          //delete rectKeepInZone2;
      };
  
      //AccessibleRoutePlanner *arpPtr;
  
      KeepInZone *rectKeepInZone1;
      KeepInZone *rectKeepInZone2;


      SimpleZoneAlertComputer *computerPtr;

  
  };