/** Constructive Testing for SimpleZoneAlertComputer class
 * @author Jonathan Rowanhill
 * @see src/cpp/SimpleZoneAlertComputer.h
 */

#include <gtest/gtest.h> 

#include "SimpleZoneAlertComputer.h"
#include "afrl/cmasi/KeepInZone.h"
#include "afrl/cmasi/KeepOutZone.h"
#include "afrl/cmasi/Rectangle.h"
#include "afrl/cmasi/Circle.h"
#include "afrl/cmasi/Polygon.h"
#include "afrl/cmasi/Location3D.h"
#include <iostream>

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
 *  Context: acceptableLookaheadTimes are all positive integer values supported by
 *           int64 
 *  RATIONALE: The function returns true for acceptable set lookahead times because
 *     the value stored in the ZoneAlertComputer is reliable by mock, and all
 *     positive values are accepted. It is believed that all positive values are
 *     accepted because the smallest positive integer (1) is accepted and a large
 *     positive value is accpted. It is unlikely that a software bug would 
 *     introduce complex comptuation behavior for other positive integers
 *     Therefore, we reasonably expect the function to behave the same for all
 *     other positive integer values. Therefore, it returns true for all positive
 *     integers.Test
 * BUG: MUST MOCK internal value fetched from the class?
 * TODO: Branch-based code coverage claim with evidence
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

/** Requirement: SR-4-3-2
 *  Satisfaction Rationale: The function satisfies the claimed requirement as follows: 
 * The function takes its input zone information and converts it from Location3D to cartesian
 * coordinates. The function utilzies the same code as the RoutePlanningServices to compute this
 * cartesian space. It follows the same assumptions of use of that code, namely that a conversion
 * object is created for each declared zone and used to convert that zones location3D from the 
 * assumed lat and longitide degrees and altitudes to a polygon at zero altitude with north and 
 * east position in meters relative to the first declared point. We understand the semantics of that first declared point, see below. The function appears to be creating the correct transformed
 * polygons in Cartesian Space, as demonstrated for simple representative cases that cover all of the applied mathematical cases of the function within defined domains. Exceptional cases are 
 * known to be disallowed and included in interface constraints (preconditions). In addition, 
 * this correct transformation is equivalent to the same polygons as generated in the RoutePlanning
 * services code. This is demonstrated by direct comparison for various test cases both simple and more arbitrary. Furthermore, examination of the use of code shows that further variation is extremely unlikely for use cases (likely equivalent outside strange use cases shoudl not be included.) The resulting geometry is stored properly by the addZone function. Therefore, we conclude that the addZone function is correctly transforming declared zones and storing them in 
 * satisfaction of SR-4-3-2, namely storing the correct Cartesian planar form for each declared zone in an equivalent space to that of RoutePlanning by RoutePlannerVisilibityService.
 *
 * Assumption: Declared zones are semantically anticipatable within conventions (classical irregular polygons, non degenerate, limited < 100 vertices, etc.)
 */



/** Class Stub to get at Protected Memebrs of SimpleZoneAlertComputer
 */
class AccessibleSimpleZoneAlertComputer : public SimpleZoneAlertComputer 
{
    public:
        using SimpleZoneAlertComputer::bFindPointsForAbstractGeometry;

        AccessibleSimpleZoneAlertComputer(int64_t lookahead) : SimpleZoneAlertComputer(lookahead) {}
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

/** Zone testing 
 */
class BasicZoneChecks  : public testing::Test {
    
  protected:
    
    BasicZoneChecks() {};


    void  SetUp() override {
        // setup square zone
        zacPtr = new AccessibleSimpleZoneAlertComputer(5000);


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
        delete zacPtr;
        //delete rectKeepInZone1; 
        //delete rectKeepInZone2;
    };

    AccessibleSimpleZoneAlertComputer *zacPtr;

    KeepInZone *rectKeepInZone1;
    KeepInZone *rectKeepInZone2;

};


/** 
 *   Checking basic geometry transformation of keep in rectangles
 */
TEST_F(BasicZoneChecks, bFindPointsForAbstractGeometryCorrectForKeepInRectangles) {
    
    n_FrameworkLib::V_POSITION_t pointVector;

    //--check resulting cartesian geometry of an unrotated rectangle at 0 Lat, 0 Long
    AbstractZone * rectKeepInZone1 = (KeepInZone*) makeRectangleZone(1, true, // zone 1 is keep in
                    0.0, 0.0, 5000.0, // center lat long in radians with alt
                    300.0, 500.0, 0.0, // width and length
                    20.0,              // padding
                    8000.0, 10000.0,  // zone altitudes
                    250.0, 26542.0,   // start and end times
                    std::vector<int> {1, 2});

    bool result = zacPtr->bFindPointsForAbstractGeometry(rectKeepInZone1->getBoundary(),
                                pointVector);
    EXPECT_TRUE(result);

    //--expect basic rectangle centered at origin and not lat long given
    EXPECT_EQ(4, pointVector.size());

    EXPECT_NEAR(300/2, pointVector[0].m_east_m, acceptedError);
    EXPECT_NEAR(500/2, pointVector[0].m_north_m, acceptedError);
    EXPECT_NEAR(0, pointVector[0].m_altitude_m, acceptedError); // expect 0 altitude

    EXPECT_NEAR(-300/2, pointVector[1].m_east_m, acceptedError);
    EXPECT_NEAR(500/2, pointVector[1].m_north_m, acceptedError);
    EXPECT_NEAR(0, pointVector[1].m_altitude_m, acceptedError); // expect 0 altitude

    EXPECT_NEAR(-300/2, pointVector[2].m_east_m, acceptedError);
    EXPECT_NEAR(-500/2, pointVector[2].m_north_m, acceptedError);
    EXPECT_NEAR(0, pointVector[2].m_altitude_m, acceptedError); // expect 0 altitude

    EXPECT_NEAR(300/2, pointVector[3].m_east_m, acceptedError);
    EXPECT_NEAR(-500/2, pointVector[3].m_north_m, acceptedError);
    EXPECT_NEAR(0, pointVector[3].m_altitude_m, acceptedError); // expect 0 altitude

    //--check same rectangle rorated 45 degrees
    AbstractZone * rectKeepInZone2 = (KeepInZone*) makeRectangleZone(2, true, // zone 2 is keep in
                    0.0, 0.0, 5000.0, // center lat long in radians with alt
                    300.0, 500.0, 0.0, // width and length and rotation
                    20.0,              // padding
                    8000.0, 10000.0,  // zone altitudes
                    250.0, 26542.0,   // start and end times
                    std::vector<int> {1, 2});

    //pointVector.clear();

    //result = zacPtr->bFindPointsForAbstractGeometry(rectKeepInZone2->getBoundary(),
    //                            pointVector);


    // NOW TEST THE ROTATED RECTANGLE ROTATED CLOCKWISE by 90 degrees
    //EXPECT_TRUE(result);

    
    delete rectKeepInZone1;
    //delete rectKeepInZone2;

    //delete rectKeepInZone2;

}




/**
 * 
 * Note: This is an example of true unit test. The functionality of translating poitns from abstract
 * geometry is mocked so that we can see the expected behavior of storing polygon cartesian points in the addZone function
 * In many cases, we do not always apply true unit testing in compositional testing. For rapid software development, 
 * we apply it when it is useful to understand compositional correctness, but not merely to show local functional
 * correctness, unless local function is sufficiently complex that there is a sufficient risk of bugs. 
 
TEST(SimpleZoneAlertComputer, addZoneStoresZonePolygonPointsCorrectly) {

    //MOCK A ZONE COMPUTER WITH bFindsPointsForAbstractGeometry sending in a fixed set of points_iterator

}
*/

/**
 * Note: This is an example of true unit test. The functionality of translating poitns from abstract
 * geometry is mocked so that we can see the expected behavior of replacing polygon points 
 * in the addZone function
/** Requirement: SR-4-3-2
 *  Satisfaction Rationale: The function satisfies the claimed requirement as follows: 
 * The function takes its input zone information and converts it from Location3D to cartesian
 * coordinates. The function utilzies the same code as the RoutePlanningServices to compute this
 * cartesian space. It follows the same assumptions of use of that code, namely that a conversion
 * object is created for each declared zone and used to convert that zones location3D from the 
 * assumed lat and longitide degrees and altitudes to a polygon at zero altitude with north and 
 * east position in meters relative to the first declared point. We understand the semantics of that first declared point, see below. The function appears to be creating the correct transformed
 * polygons in Cartesian Space, as demonstrated for simple representative cases that cover all of the applied mathematical cases of the function within defined domains. Exceptional cases are 
 * known to be disallowed and included in interface constraints (preconditions). In addition, 
 * this correct transformation is equivalent to the same polygons as generated in the RoutePlanning
 * services code. This is demonstrated by direct comparison for various test cases both simple and more arbitrary. Furthermore, examination of the use of code shows that further variation is extremely unlikely for use cases (likely equivalent outside strange use cases shoudl not be included.) The resulting geometry is stored properly by the addZone function. Therefore, we conclude that the addZone function is correctly transforming declared zones and storing them in 
 * satisfaction of SR-4-3-2, namely storing the correct Cartesian planar form for each declared zone in an equivalent space to that of RoutePlanning by RoutePlannerVisilibityService.
 *
 * Assumption: Declared zones are semantically anticipatable within conventions (classical irregular polygons, non degenerate, limited < 100 vertices, etc.)
 */
/*
TEST(SimpleZoneAlertComputer, addZoneReplacesZonePolygonPointsCorrectly) {

    //MOCK A ZONE COMPUTER WITH bFindsPointsForAbstractGeometry sending in a fixed set of points_iterator

}
*/






/*  Claim: The function stores and maintains all zone information for any semantically legitimate zone passed to it in its parameters.
 * 
 
//TEST_F(BasicZoneAlertComputerSetup, addsCorrectBasicZone) {
//
    //MOCK A ZONE COMPUTER WITH bFindsPointsForAbstractGeometry sending in a fixed set points_iterator

//}
*/

