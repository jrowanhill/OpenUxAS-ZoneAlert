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


/* BEHAVIORREGION: addZone
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
    zone->setPadding(padding);

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
    zone->setPadding(padding);

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


 /** CLAIM: addZone correctly adds proper zones to the plane
  * 
  * THERE ARE SEVERAK TESTS UNDER THIS
  * 1. TEST simple zones add (1 of each shape)
  * 2. TEST reject zone that doesn't work
  * 3. TEST add some zones and reject others
  * 4. TEST add of add many zones created psuedorandomly
  */


class SimpleComputerChecks;

class TestableSimpleZoneAlertComputer : public SimpleZoneAlertComputer {
  friend SimpleComputerChecks;

  public:
    TestableSimpleZoneAlertComputer(int64_t lookaheadTime) : SimpleZoneAlertComputer(lookaheadTime) {}
};


/** Zone testing afrl::cmasi:Exactly the same as RoutePlanner.
 */
class SimpleComputerChecks  : public testing::Test, public TestableSimpleZoneAlertComputer {

    protected:
      
      SimpleComputerChecks() : TestableSimpleZoneAlertComputer(1000) {};
  
    
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
  
  
  };
  


  TEST_F(SimpleComputerChecks, addZoneTestOneRectangle) {

    double SX = 300;
    double SY = 500;

    double X = SX/2;
    double Y = SY/2;    

    //--check same rectangle rorated 45 degrees clockwise
    // and padding is ignored
    AbstractZone * rectKeepOutZone2 = (KeepInZone*) makeRectangleZone(2, false, // zone 2 is keep in
                    0.0, 0.0, 5000.0, // center lat long in degrees with alt
                    SX, SY, -45.0, // width and length and rotation in degrees clockwise
                    20.0,              // padding
                    8000.0, 10000.0,  // zone altitudes
                    250.0, 26542.0,   // start and end times
                    std::vector<int> {1, 2});
    shared_ptr<AbstractZone> rectShared = std::make_shared<AbstractZone>(*rectKeepOutZone2);
    
    bool result = this->addZone(rectShared, false);

    // expect the function to return that the rectangle was successfully added
    EXPECT_TRUE(result);

    // expect the rectangle to be stored as a boundary and a polygon in the computer's arrays
    // under its id = 2 and no other stored polygon
    EXPECT_EQ(1, this->boundaries.size());
    shared_ptr<CBoundary> boundaryShared = this->boundaries[2];

    EXPECT_EQ(2, boundaryShared->getZoneID());
    EXPECT_EQ(false, boundaryShared->bGetKeepInZone());
    EXPECT_EQ(20.0, boundaryShared->getPadding());

    // show that addZone stored its provident geometry as a rectangle
    AbstractGeometry *abstractGeom = this->boundaries[2]->getBoundary();
    ASSERT_NE(nullptr, abstractGeom);
    ASSERT_EQ(abstractGeom->getLmcpType(), afrl::cmasi::CMASIEnum::RECTANGLE);

    // show that addZone correctly stored the boundary's planar geometry as 4 vertices 
    n_FrameworkLib::V_POSITION_t pointVector = boundaryShared->vposGetBoundaryPoints_m();

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

    // NOW SHOW ONE CPOLYGON FOR AN INTERMEDIATE ZONE WAS PROPERLY SET
    EXPECT_EQ(1, this->polygons.size());

    shared_ptr<CPolygon> polygonShared = this->polygons[2];
    EXPECT_EQ(2, polygonShared->iGetID());
    
    std::vector<int> &vertices = polygonShared->viGetVerticies();    
    EXPECT_EQ(4, vertices.size());
    EXPECT_EQ(0, vertices[0]);
    EXPECT_EQ(1, vertices[1]);
    EXPECT_EQ(2, vertices[2]);
    EXPECT_EQ(3, vertices[3]);

}

TEST_F(SimpleComputerChecks, addZoneTestRectangleAndPolygon) {

    double SX = 300;
    double SY = 500;

    double X = SX/2;
    double Y = SY/2;    

    double deg1 = 0.001;

    //--add rectangle
    AbstractZone * rectKeepOutZone2 = (KeepInZone*) makeRectangleZone(2, false, // zone 2 is keep in
        0.0, 0.0, 5000.0, // center lat long in degrees with alt
        SX, SY, -45.0, // width and length and rotation in degrees clockwise
        20.0,              // padding
        8000.0, 10000.0,  // zone altitudes
        250.0, 26542.0,   // start and end times
        std::vector<int> {1, 2});

    shared_ptr<AbstractZone> rectShared = std::make_shared<AbstractZone>(*rectKeepOutZone2);

    bool result = this->addZone(rectShared, false);

    EXPECT_TRUE(result);

    // add polygon zone
    AbstractZone * poly1 = (KeepInZone*) makePolygonZone(1, false, // zone is keep out
                    verts(4, loc(deg1, 0, 1000), loc(2*deg1, -deg1, 1000), loc(1.5*deg1, -deg1/2, 1000), loc(deg1, -3*deg1, 1000)),
                    20.0,              // padding
                    8000.0, 10000.0,  // zone altitudes
                    250.0, 26542.0,   // start and end times
                    std::vector<int> {1, 2});

    shared_ptr<AbstractZone> poly1Shared = std::make_shared<AbstractZone>(*poly1);
    
    result = this->addZone(poly1Shared, true); // make poly keep in

    // expect the function to return that the rectangle was successfully added
    EXPECT_TRUE(result);

    // expect two intermediate zones to be defined
    EXPECT_EQ(2, this->boundaries.size());
    EXPECT_EQ(2, this->polygons.size());

    // NOW CHECK THAT BOTH WERE ADDED AT THE RIGHT COORDINATES, ALL RELATIVE TO CENTER OF RECTANGLE (due to add order)
    // expect the rectangle to be stored as a boundary and a polygon in the computer's arrays
    // under its id = 2 and no other stored polygon
    shared_ptr<CBoundary> boundaryShared = this->boundaries[2];

    EXPECT_EQ(2, boundaryShared->getZoneID());
    EXPECT_EQ(false, boundaryShared->bGetKeepInZone());
    EXPECT_EQ(20.0, boundaryShared->getPadding());

    // show that addZone stored its provident geometry as a rectangle
    AbstractGeometry *abstractGeom = this->boundaries[2]->getBoundary();
    ASSERT_NE(nullptr, abstractGeom);
    ASSERT_EQ(abstractGeom->getLmcpType(), afrl::cmasi::CMASIEnum::RECTANGLE);

    // show that addZone correctly stored the boundary's planar geometry as 4 vertices 
    n_FrameworkLib::V_POSITION_t pointVector = boundaryShared->vposGetBoundaryPoints_m();

    //--expect basic rectangle centered at origin and not lat long given
    EXPECT_EQ(4, pointVector.size());
    // NOW SHOW ONE CPOLYGON FOR AN INTERMEDIATE ZONE WAS PROPERLY SET

    shared_ptr<CPolygon> polygonShared = this->polygons[2];
    EXPECT_EQ(2, polygonShared->iGetID());
    
    std::vector<int> &vertices = polygonShared->viGetVerticies();    
    EXPECT_EQ(4, vertices.size());
    EXPECT_EQ(0, vertices[0]);
    EXPECT_EQ(1, vertices[1]);
    EXPECT_EQ(2, vertices[2]);
    EXPECT_EQ(3, vertices[3]);

    // now show that the polygon appears to be stored correctly
    boundaryShared = this->boundaries[1];

    EXPECT_EQ(1, boundaryShared->getZoneID());
    EXPECT_EQ(true, boundaryShared->bGetKeepInZone());
    EXPECT_EQ(20.0, boundaryShared->getPadding());

    // show that addZone stored its provident geometry as a rectangle
    abstractGeom = this->boundaries[1]->getBoundary();
    ASSERT_NE(nullptr, abstractGeom);
    ASSERT_EQ(abstractGeom->getLmcpType(), afrl::cmasi::CMASIEnum::POLYGON);

    // show that addZone correctly stored the boundary's planar geometry as 4 vertices 
    pointVector = boundaryShared->vposGetBoundaryPoints_m();

    //--expect basic rectangle centered at origin and not lat long given
    EXPECT_EQ(4, pointVector.size());
    // NOW SHOW ONE CPOLYGON FOR AN INTERMEDIATE ZONE WAS PROPERLY SET

    polygonShared = this->polygons[1];
    EXPECT_EQ(1, polygonShared->iGetID());
    
    vertices = polygonShared->viGetVerticies();    
    EXPECT_EQ(4, vertices.size());
    EXPECT_EQ(0, vertices[0]);
    EXPECT_EQ(1, vertices[1]);
    EXPECT_EQ(2, vertices[2]);
    EXPECT_EQ(3, vertices[3]);
}


TEST_F(SimpleComputerChecks, mergeZonesKeepOutSimpleMergeCheck) {


    double SX = 300;
    double SY = 500;

    double X = SX/2;
    double Y = SY/2;    

    double deg1 = 0.003;
    //--add keep out rectangle
    AbstractZone * rectKeepOutZone1 = (KeepInZone*) makeRectangleZone(1, 
            false, // zone 1 is keep out
        deg1, deg1, 66000.0, // center lat long in degrees with alt
        SX, SY, // width and length 
        0,          // no rotation
        20.0,              // padding
        8000.0, 10000.0,  // zone altitudes
        250.0, 26542.0,   // start and end times
        std::vector<int> {1, 2});

    shared_ptr<AbstractZone> rect1Shared = std::make_shared<AbstractZone>(*rectKeepOutZone1);

    bool result = this->addZone(rect1Shared, false);

    ASSERT_TRUE(result);

    //--add rectangle
    AbstractZone * rectKeepOutZone2 = (KeepInZone*) makeRectangleZone(2, 
        false, // zone 2 is keep out
        0.0, 0.0, 5000.0, // center lat long in degrees with alt
        SX, SY,  // width and length 
        0,        // no rotation
        20.0,              // padding
        200.0, 1000.0,  // zone altitudes
        0, 23432542246542.0,   // start and end times
        std::vector<int> {1, 2});

    shared_ptr<AbstractZone> rect2Shared = std::make_shared<AbstractZone>(*rectKeepOutZone2);

    result = this->addZone(rect2Shared, false);

    ASSERT_TRUE(result);

    // now merge em and see that it works
    auto mergedZones = this->mergeZones();

    // expect one merged zone
    EXPECT_EQ(1, mergedZones->size());

    // check its zone ID
    auto processedZone = (*mergedZones)[0];
    
    EXPECT_EQ(1, processedZone->getZoneID());
    EXPECT_EQ(uxas::messages::ProcessedZone::TypeId, processedZone->getLmcpType());
    EXPECT_FALSE(processedZone->getKeepIn());

    // expect a bevel for 8 remaining vertices
    EXPECT_EQ(16, processedZone->getVertices().size());

    // check zone storage sets
    EXPECT_EQ(1, keepOutZones.size());
    EXPECT_EQ(0, keepInZones.size());    
    // zone id 1 in keep out zones
    EXPECT_TRUE(keepOutZones.find(1) != keepOutZones.end());

    // check boundaries and polygons
    ASSERT_EQ(1, boundaries.size());
    auto boundary = boundaries[1];
    ASSERT_TRUE(boundary != nullptr);
    EXPECT_EQ(1, boundary->getZoneID());
    EXPECT_EQ(16, boundary->vposGetBoundaryPoints_m().size());

    ASSERT_EQ(1, polygons.size());
    auto polygon = polygons[1];
    ASSERT_TRUE(polygon != nullptr);
    EXPECT_EQ(1, polygon->iGetID());
    EXPECT_EQ(16, polygon->viGetVerticies().size());

}

TEST_F(SimpleComputerChecks, mergeZonesKeepOutOneInsideTheOther) {


    double SX = 300;
    double SY = 500;

    double X = SX/2;
    double Y = SY/2;    

    double deg1 = 0.000;
    //--add keep out rectangle
    AbstractZone * rectKeepOutZone1 = (KeepInZone*) makeRectangleZone(1, 
            false, // zone 1 is keep out
        deg1, deg1, 66000.0, // center lat long in degrees with alt
        SX, SY, // width and length 
        0,          // no rotation
        20.0,              // padding
        8000.0, 10000.0,  // zone altitudes
        250.0, 26542.0,   // start and end times
        std::vector<int> {1, 2});

    shared_ptr<AbstractZone> rect1Shared = std::make_shared<AbstractZone>(*rectKeepOutZone1);

    bool result = this->addZone(rect1Shared, false);

    ASSERT_TRUE(result);

    //--add rectangle
    AbstractZone * rectKeepOutZone2 = (KeepInZone*) makeRectangleZone(2, 
        false, // zone 2 is keep out
        0.0, 0.0, 5000.0, // center lat long in degrees with alt
        SX/2, SY/2,  // width and length 
        0,        // no rotation
        20.0,              // padding
        200.0, 1000.0,  // zone altitudes
        0, 23432542246542.0,   // start and end times
        std::vector<int> {1, 2});

    shared_ptr<AbstractZone> rect2Shared = std::make_shared<AbstractZone>(*rectKeepOutZone2);

    result = this->addZone(rect2Shared, false);

    ASSERT_TRUE(result);

    // now merge em and see that it works
    auto mergedZones = this->mergeZones();

    // expect one merged zone
    EXPECT_EQ(1, mergedZones->size());

    // check its zone ID
    auto processedZone = (*mergedZones)[0];
    
    EXPECT_EQ(1, processedZone->getZoneID());
    EXPECT_EQ(uxas::messages::ProcessedZone::TypeId, processedZone->getLmcpType());
    EXPECT_FALSE(processedZone->getKeepIn());

    // expect a bevel for only the four vertices of the outer zone
    EXPECT_EQ(8, processedZone->getVertices().size());

    // check zone storage sets
    EXPECT_EQ(1, keepOutZones.size());
    EXPECT_EQ(0, keepInZones.size());    
    // zone id 1 in keep out zones
    EXPECT_TRUE(keepOutZones.find(1) != keepOutZones.end());
    
    // check boundaries and polygons
    ASSERT_EQ(1, boundaries.size());
    auto boundary = boundaries[1];
    ASSERT_TRUE(boundary != nullptr);
    EXPECT_EQ(1, boundary->getZoneID());
    EXPECT_EQ(8, boundary->vposGetBoundaryPoints_m().size());

    ASSERT_EQ(1, polygons.size());
    auto polygon = polygons[1];
    ASSERT_TRUE(polygon != nullptr);
    EXPECT_EQ(1, polygon->iGetID());
    EXPECT_EQ(8, polygon->viGetVerticies().size());
    
}


TEST_F(SimpleComputerChecks, mergeZonesKeepOutDontOverlap) {


    double SX = 300;
    double SY = 500;

    double X = SX/2;
    double Y = SY/2;    

    double deg1 = 0.008;
    //--add keep out rectangle
    AbstractZone * rectKeepOutZone1 = (KeepInZone*) makeRectangleZone(1, 
            false, // zone 1 is keep out
        deg1, deg1, 66000.0, // center lat long in degrees with alt
        SX, SY, // width and length 
        0,          // no rotation
        20.0,              // padding
        8000.0, 10000.0,  // zone altitudes
        250.0, 26542.0,   // start and end times
        std::vector<int> {1, 2});

    shared_ptr<AbstractZone> rect1Shared = std::make_shared<AbstractZone>(*rectKeepOutZone1);

    bool result = this->addZone(rect1Shared, false);

    ASSERT_TRUE(result);

    //--add rectangle
    AbstractZone * rectKeepOutZone2 = (KeepInZone*) makeRectangleZone(2, 
        false, // zone 2 is keep out
        0.0, 0.0, 5000.0, // center lat long in degrees with alt
        SX, SY,  // width and length 
        0,        // no rotation
        20.0,              // padding
        200.0, 1000.0,  // zone altitudes
        0, 23432542246542.0,   // start and end times
        std::vector<int> {1, 2});

    shared_ptr<AbstractZone> rect2Shared = std::make_shared<AbstractZone>(*rectKeepOutZone2);

    result = this->addZone(rect2Shared, false);

    ASSERT_TRUE(result);

    // now merge em and see that it works
    auto mergedZones = this->mergeZones();

    // expect one merged zone
    EXPECT_EQ(2, mergedZones->size());

    // check its zone ID
    auto processedZone = (*mergedZones)[0];    
    EXPECT_EQ(1, processedZone->getZoneID());
    EXPECT_EQ(uxas::messages::ProcessedZone::TypeId, processedZone->getLmcpType());
    EXPECT_FALSE(processedZone->getKeepIn());
    EXPECT_EQ(8, processedZone->getVertices().size());

    processedZone = (*mergedZones)[1];
    EXPECT_EQ(2, processedZone->getZoneID());
    EXPECT_EQ(uxas::messages::ProcessedZone::TypeId, processedZone->getLmcpType());
    EXPECT_FALSE(processedZone->getKeepIn());
    EXPECT_EQ(8, processedZone->getVertices().size());

    // check zone storage sets
    EXPECT_EQ(2, keepOutZones.size());
    EXPECT_EQ(0, keepInZones.size());    
    // zone id 1 in keep out zones
    EXPECT_TRUE(keepOutZones.find(1) != keepOutZones.end());
    EXPECT_TRUE(keepOutZones.find(2) != keepOutZones.end());

    // check boundaries and polygons
    ASSERT_EQ(2, boundaries.size());
    auto boundary = boundaries[1];
    ASSERT_TRUE(boundary != nullptr);
    EXPECT_EQ(1, boundary->getZoneID());
    EXPECT_EQ(8, boundary->vposGetBoundaryPoints_m().size());

    boundary = boundaries[2];
    ASSERT_TRUE(boundary != nullptr);
    EXPECT_EQ(2, boundary->getZoneID());
    EXPECT_EQ(8, boundary->vposGetBoundaryPoints_m().size());

    ASSERT_EQ(2, polygons.size());
    
    auto polygon = polygons[1];
    ASSERT_TRUE(polygon != nullptr);
    EXPECT_EQ(1, polygon->iGetID());
    EXPECT_EQ(8, polygon->viGetVerticies().size());
    
    polygon = polygons[2];
    ASSERT_TRUE(polygon != nullptr);
    EXPECT_EQ(2, polygon->iGetID());
    EXPECT_EQ(8, polygon->viGetVerticies().size());

}


TEST_F(SimpleComputerChecks, mergeZonesKeepInAndKeepOutDontMergeWithOverlap) {


    double SX = 300;
    double SY = 500;

    double X = SX/2;
    double Y = SY/2;    

    double deg1 = 0.001;
    //--add keep out rectangle
    AbstractZone * rectKeepOutZone1 = (KeepInZone*) makeRectangleZone(1, 
            false, // zone 1 is keep out
        deg1, deg1, 66000.0, // center lat long in degrees with alt
        SX, SY, // width and length 
        0,          // no rotation
        20.0,              // padding
        8000.0, 10000.0,  // zone altitudes
        250.0, 26542.0,   // start and end times
        std::vector<int> {1, 2});

    shared_ptr<AbstractZone> rect1Shared = std::make_shared<AbstractZone>(*rectKeepOutZone1);

    bool result = this->addZone(rect1Shared, false);

    ASSERT_TRUE(result);

    //--add rectangle
    AbstractZone * rectKeepInZone2 = (KeepInZone*) makeRectangleZone(2, 
        true, // zone 2 is keep in
        0.0, 0.0, 5000.0, // center lat long in degrees with alt
        SX, SY,  // width and length 
        0,        // no rotation
        20.0,              // padding
        200.0, 1000.0,  // zone altitudes
        0, 23432542246542.0,   // start and end times
        std::vector<int> {1, 2});

    shared_ptr<AbstractZone> rect2Shared = std::make_shared<AbstractZone>(*rectKeepInZone2);

    result = this->addZone(rect2Shared, true);

    ASSERT_TRUE(result);
    
    // now merge em and see that it works
    auto mergedZones = this->mergeZones();

    // expect one merged zone
    ASSERT_EQ(2, mergedZones->size());

    // check its zone ID
    auto processedZone = (*mergedZones)[0];    
    EXPECT_EQ(1, processedZone->getZoneID());
    EXPECT_EQ(uxas::messages::ProcessedZone::TypeId, processedZone->getLmcpType());
    EXPECT_TRUE(processedZone->getKeepIn());
    // keep in zone don't shrink and don't bezel
    EXPECT_EQ(4, processedZone->getVertices().size());

    auto processedZone2 = (*mergedZones)[1];
    EXPECT_EQ(2, processedZone2->getZoneID());
    EXPECT_EQ(uxas::messages::ProcessedZone::TypeId, processedZone2->getLmcpType());
    EXPECT_FALSE(processedZone2->getKeepIn());
    // keep out zones bezel when expanded
    EXPECT_EQ(8, processedZone2->getVertices().size());

    // check zone storage sets
    EXPECT_EQ(1, keepOutZones.size());
    EXPECT_EQ(1, keepInZones.size());    
    // zone ids in respective zone bins
    EXPECT_TRUE(keepInZones.find(1) != keepInZones.end());
    EXPECT_TRUE(keepOutZones.find(2) != keepOutZones.end());


}

TEST_F(SimpleComputerChecks, mergeZonesKeepInSimpleMergeCheck) {


    double SX = 300;
    double SY = 500;

    double X = SX/2;
    double Y = SY/2;    

    double deg1 = 0.001;
    //--add keep out rectangle
    AbstractZone * rectKeepOutZone1 = (KeepInZone*) makeRectangleZone(1, 
            false, // zone 1 is keep out
        deg1, deg1, 66000.0, // center lat long in degrees with alt
        SX, SY, // width and length 
        0,          // no rotation
        20.0,              // padding
        8000.0, 10000.0,  // zone altitudes
        250.0, 26542.0,   // start and end times
        std::vector<int> {1, 2});

    shared_ptr<AbstractZone> rect1Shared = std::make_shared<AbstractZone>(*rectKeepOutZone1);

    bool result = this->addZone(rect1Shared, true);

    ASSERT_TRUE(result);

    //--add rectangle
    AbstractZone * rectKeepOutZone2 = (KeepInZone*) makeRectangleZone(2, 
        false, // zone 2 is keep out
        0.0, 0.0, 5000.0, // center lat long in degrees with alt
        SX, SY,  // width and length 
        0,        // no rotation
        20.0,              // padding
        200.0, 1000.0,  // zone altitudes
        0, 23432542246542.0,   // start and end times
        std::vector<int> {1, 2});

    shared_ptr<AbstractZone> rect2Shared = std::make_shared<AbstractZone>(*rectKeepOutZone2);

    result = this->addZone(rect2Shared, true);

    ASSERT_TRUE(result);

    // now merge em and see that it works
    auto mergedZones = this->mergeZones();

    // expect one merged zone
    EXPECT_EQ(1, mergedZones->size());

    // check its zone ID
    auto processedZone = (*mergedZones)[0];
    
    EXPECT_EQ(1, processedZone->getZoneID());
    EXPECT_EQ(uxas::messages::ProcessedZone::TypeId, processedZone->getLmcpType());
    EXPECT_TRUE(processedZone->getKeepIn());

    // expect 8 vertices and no beveling because no padding
    EXPECT_EQ(8, processedZone->getVertices().size());

    // check zone storage sets
    EXPECT_EQ(0, keepOutZones.size());
    EXPECT_EQ(1, keepInZones.size());    
    // zone id 1 in keep out zones
    EXPECT_TRUE(keepInZones.find(1) != keepInZones.end());


    // show that the boundaries and polygons exist for this zone id
    ASSERT_EQ(1, this->boundaries.size());
    auto boundary = this->boundaries[1];
    ASSERT_TRUE(boundary != nullptr);
}

TEST_F(SimpleComputerChecks, mergeZonesKeepInOneInsideTheOther) {


    double SX = 300;
    double SY = 500;

    double X = SX/2;
    double Y = SY/2;    

    double deg1 = 0.000;
    //--add keep out rectangle
    AbstractZone * rectKeepOutZone1 = (KeepInZone*) makeRectangleZone(1, 
            false, // zone 1 is keep out
        deg1, deg1, 66000.0, // center lat long in degrees with alt
        SX, SY, // width and length 
        0,          // no rotation
        20.0,              // padding
        8000.0, 10000.0,  // zone altitudes
        250.0, 26542.0,   // start and end times
        std::vector<int> {1, 2});

    shared_ptr<AbstractZone> rect1Shared = std::make_shared<AbstractZone>(*rectKeepOutZone1);

    bool result = this->addZone(rect1Shared, true);

    ASSERT_TRUE(result);

    //--add rectangle
    AbstractZone * rectKeepOutZone2 = (KeepInZone*) makeRectangleZone(2, 
        false, // zone 2 is keep out
        0.0, 0.0, 5000.0, // center lat long in degrees with alt
        SX/2, SY/2,  // width and length 
        0,        // no rotation
        20.0,              // padding
        200.0, 1000.0,  // zone altitudes
        0, 23432542246542.0,   // start and end times
        std::vector<int> {1, 2});

    shared_ptr<AbstractZone> rect2Shared = std::make_shared<AbstractZone>(*rectKeepOutZone2);

    result = this->addZone(rect2Shared, true);

    ASSERT_TRUE(result);

    // now merge em and see that it works
    auto mergedZones = this->mergeZones();

    // expect one merged zone
    EXPECT_EQ(1, mergedZones->size());

    // check its zone ID
    auto processedZone = (*mergedZones)[0];
    
    EXPECT_EQ(1, processedZone->getZoneID());
    EXPECT_EQ(uxas::messages::ProcessedZone::TypeId, processedZone->getLmcpType());
    EXPECT_TRUE(processedZone->getKeepIn());

    // expect a single rectangle with no bevel because no padding
    EXPECT_EQ(4, processedZone->getVertices().size());

    // check zone storage sets
    EXPECT_EQ(0, keepOutZones.size());
    EXPECT_EQ(1, keepInZones.size());    
    // zone id 1 in keep out zones
    EXPECT_TRUE(keepInZones.find(1) != keepInZones.end());

}


TEST_F(SimpleComputerChecks, mergeZonesKeepInDontOverlap) {


    double SX = 300;
    double SY = 500;

    double X = SX/2;
    double Y = SY/2;    

    double deg1 = 0.008;
    //--add keep out rectangle
    AbstractZone * rectKeepOutZone1 = (KeepInZone*) makeRectangleZone(1, 
            false, // zone 1 is keep out
        deg1, deg1, 66000.0, // center lat long in degrees with alt
        SX, SY, // width and length 
        0,          // no rotation
        20.0,              // padding
        8000.0, 10000.0,  // zone altitudes
        250.0, 26542.0,   // start and end times
        std::vector<int> {1, 2});

    shared_ptr<AbstractZone> rect1Shared = std::make_shared<AbstractZone>(*rectKeepOutZone1);

    bool result = this->addZone(rect1Shared, true);

    ASSERT_TRUE(result);

    //--add rectangle
    AbstractZone * rectKeepOutZone2 = (KeepInZone*) makeRectangleZone(2, 
        false, // zone 2 is keep out
        0.0, 0.0, 5000.0, // center lat long in degrees with alt
        SX, SY,  // width and length 
        0,        // no rotation
        20.0,              // padding
        200.0, 1000.0,  // zone altitudes
        0, 23432542246542.0,   // start and end times
        std::vector<int> {1, 2});

    shared_ptr<AbstractZone> rect2Shared = std::make_shared<AbstractZone>(*rectKeepOutZone2);

    result = this->addZone(rect2Shared, true);

    ASSERT_TRUE(result);

    // now merge em and see that it works
    auto mergedZones = this->mergeZones();

    // expect one merged zone
    EXPECT_EQ(2, mergedZones->size());

    // check its zone ID
    auto processedZone = (*mergedZones)[0];    
    EXPECT_EQ(1, processedZone->getZoneID());
    EXPECT_EQ(uxas::messages::ProcessedZone::TypeId, processedZone->getLmcpType());
    EXPECT_TRUE(processedZone->getKeepIn());
    EXPECT_EQ(4, processedZone->getVertices().size());

    processedZone = (*mergedZones)[1];
    EXPECT_EQ(2, processedZone->getZoneID());
    EXPECT_EQ(uxas::messages::ProcessedZone::TypeId, processedZone->getLmcpType());
    EXPECT_TRUE(processedZone->getKeepIn());
    EXPECT_EQ(4, processedZone->getVertices().size());

    // check zone storage sets
    EXPECT_EQ(0, keepOutZones.size());
    EXPECT_EQ(2, keepInZones.size());    
    // zone id 1 in keep out zones
    EXPECT_TRUE(keepInZones.find(1) != keepInZones.end());
    EXPECT_TRUE(keepInZones.find(2) != keepInZones.end());

}


TEST_F(SimpleComputerChecks, computeZoneViolationInsideKeepOut) {

    double SX = 300;
    double SY = 500;

    double X = SX/2;
    double Y = SY/2;    

    double deg1 = 0.008;
    //--add keep out rectangle
    AbstractZone * rectKeepOutZone1 = (KeepInZone*) makeRectangleZone(1, 
            false, // zone 1 is keep out
        deg1, deg1, 66000.0, // center lat long in degrees with alt
        SX, SY, // width and length 
        0,          // no rotation
        20.0,              // padding
        8000.0, 10000.0,  // zone altitudes
        250.0, 26542.0,   // start and end times
        std::vector<int> {1, 2});

    shared_ptr<AbstractZone> rect1Shared = std::make_shared<AbstractZone>(*rectKeepOutZone1);

    bool result = this->addZone(rect1Shared, false);

    ASSERT_TRUE(result);

    auto procZones = this->mergeZones();

    ASSERT_TRUE(procZones != nullptr);

    // show that a vehicle inside the zone causes single immediate violation report
    std::stringstream errors;

    auto vehicleState = std::make_shared<afrl::cmasi::AirVehicleState>();    
    vehicleState->setID(1);
    vehicleState->setGroundspeed(1.0); // moving at 1 meter per second relative to ground
    vehicleState->setCourse(270.0); // heading east
    vehicleState->setVerticalSpeed(110.0);

    Location3D *locationPtr = new Location3D();
    locationPtr->setAltitude(66000.0);
    locationPtr->setLatitude(deg1);
    locationPtr->setLongitude(deg1);

    vehicleState->setLocation(locationPtr);

    auto violationsPtr = this->computeZoneViolations(vehicleState, errors);

    std::cout << errors.str() << std::endl;

    ASSERT_TRUE(violationsPtr != nullptr);

    ASSERT_EQ(1, violationsPtr->size());


}

TEST_F(SimpleComputerChecks, computeZoneViolationsImminentWithKeepOut) {
}

TEST_F(SimpleComputerChecks, computeZoneViolationsFarFromKeepOut) {
}

TEST_F(SimpleComputerChecks, computeZoneViolationsInOneAndImminentWithAnotherKeepOut) {
}

TEST_F(SimpleComputerChecks, computeZoneViolationsImminentWithTwoKeepOuts) {
}


/** CLAIM: THE ROUTE PLANNING SERVICE EMITS THE SET OF MERGED ZONES WITH NEW IDS , ETC SEE REQUIREMENTS */

/** CLAIM: THE ROUTE PLANNING SERVICE REPORTS WHEN A VEHICLE IS IN CURRENT CONFLICT WITH ANY GIVEN MERGED ZONE */

/** CLAIM: Requiremnt for Keep-Out existing violation is satisfied */

/** CLAIM: Requiremnt for Keep-In existing violation is satisfied */

/** CLAIM: Requirement about Imminetnt violation reporting */

/** CLAIM: Requirement about Keep-out imminent violation reporting*/

/** CLAIM: Requirement about Keep-in imminent violation reporting*/


class MockCPolygon :CPolygon {
    /**
    int& iGetID(){return(m_iID);};
    const int& iGetID()const{return(m_iID);};    
    **/
    //MOCK_METHOD();


};




