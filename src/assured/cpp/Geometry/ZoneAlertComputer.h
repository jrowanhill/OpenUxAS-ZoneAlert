/** A pure virtual defining the interface for zone alert computation.
*/

#ifndef UXAS_ZONE_ALERT_COMPUTER_H
#define UXAS_ZONE_ALERT_COMPUTER_H

#include <memory>
#include <vector>

#include "Position.h"

#include "afrl/cmasi/AirVehicleConfiguration.h"
#include "afrl/cmasi/AirVehicleState.h"
#include "afrl/cmasi/AbstractZone.h"
#include "afrl/alerts/ImminentZoneViolation.h"


using namespace n_FrameworkLib;
using namespace std;

namespace zoneAlert {


/**
 * @brief A device that computers alerts for imminent zone violations.
 * 
 * @details Given declarations of all relevant zones and aircraft, this alerter will compute imminent zone violations
 * for a given vehicle state report.
 */
class ZoneAlertComputer {

public:

    virtual ~ZoneAlertComputer() = 0;

    /**
     * @brief Add a declared zone to the analyzer
     * 
     * @param zone The AbstractZone that has been declared
     * @param keepIn whether the zone was sent as a KeenIn or KeepOut zones
     * 
     * @post if it returns true, then it will zone alert, otherwise it is not stored for zone alerts.
     * @post Always replaces any previously declared zone with same id, whether successful or not.
     * @post Always deletes a previously declared zone if it returns false
     */
    virtual bool addZone(shared_ptr<afrl::cmasi::AbstractZone> zonePtr, bool keepIn) = 0;

    /**
     * @brief Add a declared vehicle to the analyzer
     * 
     * @param vehicleConfigPtr A pointer to the vehicle configuration to report
     */
    virtual void addVehicle(shared_ptr<afrl::cmasi::AirVehicleConfiguration> vehicleConfig) = 0;

    /**
     * @brief Prepare data further for active alerting of imminent zone violations
     * 
     * @pre All zones and vehicles have been declared
     * @post The zone alert computer is ready to detect imminent zone collisions from reported vehicle states.
     */
    virtual bool prepareForActiveState() = 0;

    /**
     * @brief Process a vehicle state and report any predicted zone violations
     * 
     * @param vehicleState 
     * @return std::vector<PredictedViolation> a vector predicted zone violations for the vehicle
     */
    virtual vector<shared_ptr<afrl::alerts::ImminentZoneViolation>> processVehicleStateReport(
                shared_ptr<afrl::cmasi::AirVehicleState> vehicleState) = 0;

protected:

    //----Helper Functions -----//

    /**
     * @brief Generate  instantaneous linear velocity of the vehicle in the world frame
     * 
     * @param vehicleState the vehicle state from which current linear trajectory is derived
     * @return as a standard array with linear velocity in x, y, and z world components
     */
    array<float,3> worldFrameVelocity(shared_ptr<afrl::cmasi::AirVehicleState> vehicleState) {

        // compute x and y components of velocity from ground track and ground speed in m/s
        // note sin and cos are computed as doubles for accuracy and implicit precision reduction conversion occurs in the multiplication
        float xv = sind(vehicleState->getCourse()) * vehicleState->getGroundspeed();
        float yv = cosd(vehicleState->getCourse()) * vehicleState->getGroundspeed();

        // z component is vertical speed in m/s
        float zv = vehicleState->getVerticalSpeed();
        
        return std::array<float,3> {{xv, yv, zv}};
    }
    
    /**
     * @brief Compute the end position of vehicle state from linear trajectory with a lookahead time
     * 
     * @details Given vehicle position, currents linear trajectory, and a future time, this function
     * computes the projected future position of the vehicle at the future time.
     * 
     * @param currentPosition the current position of the vehicle
     * @param velocity the current velocity of the vehicle in the world frame in x, y, z in that order
     * @param futureTime The future time at which to predict vehicle position where 0 is the present time
     * 
     * @return the predicted position of the vehicle at time lookahead
     */
    CPosition futurePosition(CPosition & currentPosition, array<float, 3> & velocity, double futureTime) {

        double nx = currentPosition.m_east_m * futureTime * velocity[0];
        double ny = currentPosition.m_north_m * futureTime * velocity[1];
        double nz = currentPosition.m_altitude_m * futureTime * velocity[2];

        return CPosition(nx, ny, nz);
    }

private:

    /**
     * @brief Convert degrees to radians
     * 
     * @param d degrees 
     * @return double (floating-point double precision) equivalent value in radians
     */
    static double d2r(double d) {
        return (d / 180.0) * ((double) M_PI);
    }

    /**
     * @brief A function to produce highly accurate sin values converting radians to degrees. From StackOverflow
     * @cite https://stackoverflow.com/questions/31502120/sin-and-cos-give-unexpected-results-for-well-known-angles/31525208#31525208
     * 
     * @param x angle in degrees
     * @return double sin value
     */
    double sind(double x) {
    if (!isfinite(x)) {
        return sin(x);
    }
    if (x < 0.0) {
        return -sind(-x);
    }
    int quo;
    double x90 = remquo(fabs(x), 90.0, &quo);
    switch (quo % 4) {
        case 0:
        // Use * 1.0 to avoid -0.0
        return sin(d2r(x90)* 1.0);
        case 1:
        return cos(d2r(x90));
        case 2:
        return sin(d2r(-x90) * 1.0);
        case 3:
        return -cos(d2r(x90));
    }
    return 0.0;
    }

    /**
     * @brief An accurate function to compute the cosine of an angle in degrees
     * 
     * @param x  angle in degrees
     * @return double cosine result
     */
    double cosd(double x) {
        return sind(90 - x);
    }



};

};


#endif