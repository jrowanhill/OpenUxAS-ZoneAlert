/** Constructive Testing for SimpleZoneAlertComputer class
 * @author Jonathan Rowanhill
 * @see src/cpp/SimpleZoneAlertComputer.h
 */

#include <gtest/gtest.h> 

#include "SimpleZoneAlertComputer.h"

using namespace zoneAlert;

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
TEST(SimpleZoneAlertComputer, getLookaheadTimeIsCorrect) {

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
 *     integers.
 * BUG: MUST MOCK internal value fetched from the class?
 * TODO: Branch-based code coverage claim with evidence
*/
TEST(SimpleZoneAlertComputer, detectsAcceptableTimes) {
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
TEST(SimpleZoneAlertComputer, detectsUnacceptableLookaheadTimes) {

    int64_t invalid_1 = 0;
    int64_t invalid_2 = -236754;
    int64_t invalid_3 = -1;    

    SimpleZoneAlertComputer szac1((int64_t) invalid_1);
    EXPECT_FALSE(szac1.acceptableLookaheadTime());

    SimpleZoneAlertComputer szac2((int64_t) invalid_2);
    EXPECT_FALSE(szac2.acceptableLookaheadTime());

    SimpleZoneAlertComputer szac3((int64_t) invalid_3);
    EXPECT_FALSE(szac3.acceptableLookaheadTime());

}
