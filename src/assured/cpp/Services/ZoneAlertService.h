// ===============================================================================
// Authors: Rowanhill, Dependable Computing LLC
// Organization: Dependable Computing LLC
// 
// Copyright (c) 2024 Government of the United State of America, as represented by
// the Secretary of the Air Force.  No copyright is claimed in the United States under
// Title 17, U.S. Code.  All Other Rights Reserved.
// ===============================================================================

/* 
 * File:   ZoneAlertService.h
 * Author: Rowanhill
 *
 * Created on February 4, 2024, 11:36 AM
 */

#ifndef UXAS_ZONE_ALERT_SERVICE_H
#define UXAS_ZONE_ALERT_SERVICE_H

#include "afrl/cmasi/AbstractZone.h"
#include "afrl/cmasi/AirVehicleConfiguration.h"
#include "afrl/cmasi/AirVehicleState.h"

#include "ServiceBase.h"
#include "TypeDefs/UxAS_TypeDefs_Timer.h"

#include "Geometry/BoundedZoneStore.h"
#include "Geometry/CartesianVehicleState.h"



namespace uxas
{
namespace service
{

/*! @class ZoneAlertService
 *
 * @brief This is a service to alert subscribers when a vehicle's last reported instantaneous linear trajectory 
 * is predicted to violate one or more zones.
 *
 * 
 * TODO:
 * <li> include the new service header file in ServiceManager.cpp</li>
 * <li> add a dummy instance of the new service in ServiceManager.cpp, e.g.
 * {auto svc = uxas::stduxas::make_unique<uxas::service::MyNewService>();} 
 * Note: this is required to link the new service in when building UxAS</li>
 *  
 * </ul> @n
 * 
 * Configuration String: <Service Type="ZoneAlertService" OptionString="Option_01" OptionInt="36" />
 * 
 * Options:
 *  - OptionString - sample string option
 *  - OptionInt - sample integer option
 * 
 * Subscribed Messages:
 *  - afrl::cmasi::KeyValuePair
 * 
 * Sent Messages:
 *  - afrl::cmasi::KeyValuePair
 * 
 * 
 */

class ZoneAlertService : public ServiceBase
{
public:

    /** \brief This string is used to identify this service in XML configuration
     * files, i.e. Service Type="ZoneAlertService". It is also entered into
     * service registry and used to create new instances of this service. */
    static const std::string& s_typeName() {
        static std::string s_string("ZoneAlertService");
        return (s_string);
    };

    static const std::vector<std::string> s_registryServiceTypeNames() {
        std::vector<std::string> registryServiceTypeNames = {s_typeName()};
        return (registryServiceTypeNames);
    };

    /** \brief If this string is not empty, it is used to create a data 
     * directory to be used by the service. The path to this directory is
     * accessed through the ServiceBase variable m_workDirectoryPath. */
    static const std::string& s_directoryName() { static std::string s_string(""); return (s_string); };

    static ServiceBase* create() {
        return new ZoneAlertService;
    };

    ZoneAlertService();

    virtual
    ~ZoneAlertService();

private:

    //---- Standard OpenUxAS Service Interface ---//

    static ServiceBase::CreationRegistrar<ZoneAlertService> s_registrar;

    /** brief Copy construction not permitted */
    ZoneAlertService(ZoneAlertService const&) = delete;

    /** brief Copy assignment operation not permitted */
    void operator=(ZoneAlertService const&) = delete;

    bool configure(const pugi::xml_node& serviceXmlNode) override;

    bool initialize() override;

    bool start() override;

    bool terminate() override;

    bool processReceivedLmcpMessage(std::unique_ptr<uxas::communications::data::LmcpMessage> receivedLmcpMessage) override;

protected:

    // ---- Internal Logic of the Zone Alert Service ---//

    /**
     * @brief Register a Zone announced in OpenUxAS. The service must know about any zones it will warn about.
     * 
     * @param zone the zone information as obtained from OpenUxAS
     * @param keepIn whether the zone is a keep in or keep out zone
     * @return true if the service successfully registers the zone
     * @return false if the service fails to register the zone
     */
    bool registerZone(std::shared_ptr<AbstractZone> zone, bool keepIn);

    /**
     * @brief Register a Vehicle announced in OpenUxAS. Important for computing on vehicle capabilities.
     * 
     * @param vehicleConfig The vehicle configuration message
     * @return true if the service successfully registers the vehicle
     * @return false if the service fails to register the vehicle
     */
    bool registerVehicle(std::shared_ptr<AirVehicleConfiguration> vehicleConfig);

    /**
     * @brief Called when a vehicle reports its state. This is where the service checks for potential future zone violations.
     * 
     * @invariant If the reporting air vehicle has a previously registered configuration, then this function will return a
     * PredictedAlert for each previously registered zone for which there is a predicted imminent violation.
     * 
     * @return std::vector<PredictedViolation> 
     */
    std::vector<PredictedViolation> processVehicleStateReport(std::shared_ptr(AirVehicleState) vehicleState);


private:
    // storage for the option entries
    std::string m_option01 = std::string("No Option 1");
    int32_t m_option02{0};


    // the zones that the service has seen announced
    ZoneAlertComputer *zoneAlertComputerPtr;

};

}; //namespace service
}; //namespace uxas

#endif /* UXAS_00_SERVICE_TEMPLATE_H */

