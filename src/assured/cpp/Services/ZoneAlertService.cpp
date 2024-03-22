// ===============================================================================
// Authors: AFRL/RQQA
// Organization: Air Force Research Laboratory, Aerospace Systems Directorate, Power and Control Division
// 
// Copyright (c) 2017 Government of the United State of America, as represented by
// the Secretary of the Air Force.  No copyright is claimed in the United States under
// Title 17, U.S. Code.  All Other Rights Reserved.
// ===============================================================================

/* 
 * File:   ZoneAlertService.cpp
 * Author: steve
 *
 * Created on March 17, 2017, 5:55 PM
 *
 * <Service Type="ZoneAlertService" OptionString="Option_01" OptionInt="36" />
 * 
 */

// include header for this service
#include "ZoneAlertService.h"
#include "SimpleZoneAlertComputer.h"

//include LMCP Messages

#include <iostream>     // std::cout, cerr, etc
#include <afrl/cmasi/KeepInZone.h>

// convenience definitions for the option strings
#define STRING_XML_OPTION_STRING "OptionString"
#define STRING_XML_OPTION_INT "OptionInt"

// namespace definitions
namespace uxas  // uxas::
{
namespace service   // uxas::service::
{

// this entry registers the service in the service creation registry
ZoneAlertService::ServiceBase::CreationRegistrar<ZoneAlertService>
ZoneAlertService::s_registrar(ZoneAlertService::s_registryServiceTypeNames());

// service constructor
ZoneAlertService::ZoneAlertService()
: ServiceBase(ZoneAlertService::s_typeName(), ZoneAlertService::s_directoryName()) { };

// service destructor
ZoneAlertService::~ZoneAlertService() { };


bool ZoneAlertService::configure(const pugi::xml_node& ndComponent)
{
    bool isSuccess(true);

    // process options from the XML configuration node:
    if (!ndComponent.attribute(STRING_XML_OPTION_STRING).empty())
    {
        m_option01 = ndComponent.attribute(STRING_XML_OPTION_STRING).value();
    }
    if (!ndComponent.attribute(STRING_XML_OPTION_INT).empty())
    {
        m_option02 = ndComponent.attribute(STRING_XML_OPTION_INT).as_int();
    }

    // subscribe to messages::
    addSubscriptionAddress(afrl::cmasi::AbstractZone::Subscription);
    addSubscriptionAddress(afrl::cmasi::AirVehicleConfiguration::Subscription);
    addSubscriptionAddress(afrl::cmasi::AirVehicleState::Subscription);

    return (isSuccess);
}

bool ZoneAlertService::initialize()
{
    // perform any required initialization before the service is started
    std::cout << "*** INITIALIZING:: Service[" << s_typeName() << "] Service Id[" << m_serviceId << "] with working directory [" << m_workDirectoryName << "] *** " << std::endl;
    
    // setup core data models
    zoneAlertComputerPtr = new zoneAlert::SimpleZoneAlertComputer(lookaheadTime);

    return (true);
}

bool ZoneAlertService::start()
{
    // perform any actions required at the time the service starts
    std::cout << "*** STARTING:: Service[" << s_typeName() << "] Service Id[" << m_serviceId << "] with working directory [" << m_workDirectoryName << "] *** " << std::endl;
    
    return (true);
};

bool ZoneAlertService::terminate()
{
    // perform any action required during service termination, before destructor is called.
    std::cout << "*** TERMINATING:: Service[" << s_typeName() << "] Service Id[" << m_serviceId << "] with working directory [" << m_workDirectoryName << "] *** " << std::endl;
    
    // deconstruct core data models

    return (true);
}

bool ZoneAlertService::processReceivedLmcpMessage(std::unique_ptr<uxas::communications::data::LmcpMessage> receivedLmcpMessage)
{
    if (afrl::cmasi::isAbstractZone(receivedLmcpMessage->m_object)) {

        // Is it a keep in or keep out zone? 
        bool isKeepIn = afrl::cmasi::isKeepInZone(receivedLmcpMessage->m_object);

        // Take message type and build bound zone
        auto abstractZone = std::static_pointer_cast<afrl::cmasi::AbstractZone> (receivedLmcpMessage->m_object);
        std::cout << "*** RECEIVED:: Service[" << s_typeName() << "] Received a Zone with the id " 
            << abstractZone->getZoneID()
            << " *** " << std::endl;

        // Store the zone in the alert computer
        // @TODO Check memory safety of casting from unique_ptr to static pointer above and then to shared pointer in the method call
        auto success = zoneAlertComputerPtr->addZone(abstractZone, isKeepIn);

        if (!success) {
        std::cout << "*** Service[" << s_typeName() << "] Failed to apply abstract zone with id " 
            << abstractZone->getZoneID()
            << " *** " << std::endl;
        }
    }
    else if (afrl::cmasi::isAirVehicleConfiguration(receivedLmcpMessage->m_object)) {
        auto airVehicleConfiguration = std::static_pointer_cast<afrl::cmasi::AirVehicleConfiguration> (receivedLmcpMessage->m_object);
        std::cout << "*** RECEIVED:: Service[" << s_typeName() << "] Received a Vehicle Configuration with the id " 
            << airVehicleConfiguration->getID()
            << " *** " << std::endl;

        // Store the aircraft configuration in the alert computer
        // @TODO Check memory safety of casting from unique_ptr to static pointer above and then to shared pointer in the method call
        zoneAlertComputerPtr->addVehicle(airVehicleConfiguration);
         
    }

    if (afrl::cmasi::isAirVehicleState(receivedLmcpMessage->m_object)) {
        auto airVehicleState = std::static_pointer_cast<afrl::cmasi::AirVehicleState> (receivedLmcpMessage->m_object);
        std::cout << "*** RECEIVED:: Service[" << s_typeName() << "] Received a Vehicle State with the id "  
            << airVehicleState->getID()
            << "for time "
            << " *** " << std::endl;

        // Process the aircraft state to identify impending zone violations
        // @TODO Check memory safety of casting from unique_ptr to static pointer above and then to shared pointer in the method call
        zoneAlertComputerPtr->processVehicleStateReport(airVehicleState);

        RECORD AND HANDLE OUTPUT HERE
        SOME CODE LIKE THIS BELOW
        auto keyValuePairOut = std::make_shared<afrl::cmasi::KeyValuePair>();
        keyValuePairOut->setKey(s_typeName());
        keyValuePairOut->setValue(std::to_string(m_serviceId));
        sendSharedLmcpObjectBroadcastMessage(keyValuePairOut);
    }

    return false;
}

//-------------- Internal Logic Functions -------------//

bool ZoneAlertService::registerZone(std::shared_ptr<AbstractZone> zone, bool keepIn) {

}




}; //namespace service
}; //namespace uxas
