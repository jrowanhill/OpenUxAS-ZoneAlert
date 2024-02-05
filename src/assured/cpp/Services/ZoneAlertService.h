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


#include "ServiceBase.h"
#include "CallbackTimer.h"
#include "TypeDefs/UxAS_TypeDefs_Timer.h"

namespace uxas
{
namespace service
{

/*! \class ZoneAlertService
    \brief This is a service to alert subscribers when a vehicle for which they subscribe
    is predicted to be in existing or imminent violation of one or more keep-in and keep-out zones.

 * 
 *  @par To add a new service:
 * <ul style="padding-left:1em;margin-left:0">
 * <li>Make copies of the source and header files of this template.</li>
 * <li>Search for the string ZoneAlertService and Replace it with the new 
 * service name.</li>
 * <li>Change the unique include guard entries, in the header file, i.e. 
 * "UXAS_00_SERVICE_TEMPLATE_H" to match the new service name</li>
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
    static const std::string&
    s_typeName()
    {
        static std::string s_string("ZoneAlertService");
        return (s_string);
    };

    static const std::vector<std::string>
    s_registryServiceTypeNames()
    {
        std::vector<std::string> registryServiceTypeNames = {s_typeName()};
        return (registryServiceTypeNames);
    };

    /** \brief If this string is not empty, it is used to create a data 
     * directory to be used by the service. The path to this directory is
     * accessed through the ServiceBase variable m_workDirectoryPath. */
    static const std::string&
    s_directoryName() { static std::string s_string(""); return (s_string); };

    static ServiceBase*
    create()
    {
        return new ZoneAlertService;
    };

    ZoneAlertService();

    virtual
    ~ZoneAlertService();

private:

    static
    ServiceBase::CreationRegistrar<ZoneAlertService> s_registrar;

    /** brief Copy construction not permitted */
    ZoneAlertService(ZoneAlertService const&) = delete;

    /** brief Copy assignment operation not permitted */
    void operator=(ZoneAlertService const&) = delete;

    bool
    configure(const pugi::xml_node& serviceXmlNode) override;

    bool
    initialize() override;

    bool
    start() override;

    bool
    terminate() override;

    bool
    processReceivedLmcpMessage(std::unique_ptr<uxas::communications::data::LmcpMessage> receivedLmcpMessage) override;


private:
    // storage for the option entries
    std::string m_option01 = std::string("No Option 1");
    int32_t m_option02{0};
};

}; //namespace service
}; //namespace uxas

#endif /* UXAS_00_SERVICE_TEMPLATE_H */

