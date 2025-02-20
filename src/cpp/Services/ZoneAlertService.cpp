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
#include "afrl/cmasi/KeepInZone.h"
#include "afrl/cmasi/AutomationRequest.h"

// convenience definitions for the option strings
#define STRING_XML_OPTION_STRING "OptionString"
#define STRING_XML_OPTION_INT "OptionInt"

// namespace definitions
namespace uxas  // uxas::
{
namespace service   // uxas::service::
{

using std::string;
using std::stringstream;

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
    return (isSuccess);
}

bool ZoneAlertService::initialize()
{
    // perform any required initialization before the service is started
    std::cout << "*** INITIALIZING:: Service[" << s_typeName() << "] Service Id[" << m_serviceId << "] with working directory [" << m_workDirectoryName << "] *** " << std::endl;
    
    // setup core data models
    zoneAlertComputerPtr = new zoneAlert::SimpleZoneAlertComputer(lookaheadTime);

    // subscribe to messages::
    addSubscriptionAddress(afrl::cmasi::AbstractZone::Subscription);
    addSubscriptionAddress(afrl::cmasi::AirVehicleConfiguration::Subscription);
    addSubscriptionAddress(afrl::cmasi::AirVehicleState::Subscription);

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
        bool isKeepIn = afrl::cmasi::isKeepInZone(receivedLmcpMessage->m_object);
        auto abstractZone = std::static_pointer_cast<afrl::cmasi::AbstractZone>(receivedLmcpMessage->m_object);    
        return registerZone(abstractZone, isKeepIn);
    }

    else if (afrl::cmasi::isAirVehicleConfiguration(receivedLmcpMessage->m_object)) {
        auto airVehicleConfig = std::static_pointer_cast<afrl::cmasi::AirVehicleConfiguration>(receivedLmcpMessage->m_object);    
        return registerVehicle(airVehicleConfig);         
    }

    else if (afrl::cmasi::isAirVehicleState(receivedLmcpMessage->m_object)) {
        auto airVehicleState = std::static_pointer_cast<afrl::cmasi::AirVehicleState>(receivedLmcpMessage->m_object);    
        return processVehicleStateReport(airVehicleState);
    }

    else if(afrl::cmasi::isAutomationRequest(receivedLmcpMessage->m_object)) {
        return mergeZones();
    }

    return false;
}


bool ZoneAlertService::registerZone(std::shared_ptr<afrl::cmasi::AbstractZone> abstractZone, bool isKeepIn) {

    // Take message type and build bound zone
    //auto abstractZone = std::static_pointer_cast<afrl::cmasi::AbstractZone> (receivedLmcpMessage->m_object);
    std::cout << "*** RECEIVED:: Service[" << s_typeName() << "] Received a Zone with the id " 
        << abstractZone->getZoneID()
        << " *** " << std::endl;

    // Register and record the zone
    auto success = zoneAlertComputerPtr->addZone(abstractZone, isKeepIn);

    // log if could not record the zone
    if (!success) {
    std::cout << "*** Service[" << s_typeName() << "] Failed to record Zone with id " 
        << abstractZone->getZoneID()
        << " *** " << std::endl;
    }     

    return success;
}

bool ZoneAlertService::registerVehicle(std::shared_ptr<afrl::cmasi::AirVehicleConfiguration> airVehicleConfiguration) {

    std::cout << "*** RECEIVED:: Service[" << s_typeName() << "] Received a Vehicle Configuration with the id " 
        << airVehicleConfiguration->getID()
        << " *** " << std::endl;

    // Store the aircraft configuration in the alert computer
    // @TODO Check memory safety of casting from unique_ptr to static pointer above and then to shared pointer in the method call
    
    auto success = zoneAlertComputerPtr->addVehicle(airVehicleConfiguration);

    if (!success) {
    std::cout << "*** Service[" << s_typeName() << "] Failed to apply vehicle declration with id " 
        << airVehicleConfiguration->getID()
        << " *** " << std::endl;
    }

    return success;

}

bool ZoneAlertService::mergeZones() {
        // assuming that all zones and vehicles have been declared, and now automation
        // is being requested, perform zone merging and report merged zones

        std::cout << "*** RECEIVED:: Service[" << s_typeName() << "] Received automation request. Processing zones." 
            << " *** " << std::endl;


        // @todo: Handle the fact that this is asynchronous and might miss out on 
        // the start of missiosn if merging takes too long (falls behind, required soft keep-up computational real-time)
        auto mergedZonesPtr = zoneAlertComputerPtr->mergeZones();

        // report each merged zone
        if (mergedZonesPtr != NULL) {

            std::cout << "*** RECEIVED:: Service[" << s_typeName() << "] Processing zones succesful. Emiting processed zone declarations." 
            << " *** " << std::endl;

            for (int i = 0; i<mergedZonesPtr->size(); i++) {
                sendSharedLmcpObjectBroadcastMessage((*mergedZonesPtr)[i]);
            }

            mergedZonesPtr->clear();
            delete mergedZonesPtr;

            std::cout << "*** RECEIVED:: Service[" << s_typeName() << "] Finished processed zone declarations." 
            << " *** " << std::endl;

            return true;
        }    
        else {
            std::cout << "*** RECEIVED:: Service[" << s_typeName() << "] Processing zones failed. No zone alerting will occur." 
            << " *** " << std::endl;

            return false;
        }

}

bool ZoneAlertService::processVehicleStateReport(std::shared_ptr<afrl::cmasi::AirVehicleState> airVehicleState) {

    std::cout << "*** RECEIVED:: Service[" << s_typeName() << "] Received a Vehicle State with the id "  
        << airVehicleState->getID()
        << "for time "
        << " *** " << std::endl;

    // Process the aircraft state to identify impending zone violations
    // @TODO Check memory safety of casting from unique_ptr to static pointer above and then to shared pointer in the method call
    stringstream errorLog;
    auto violationsPtr = zoneAlertComputerPtr->computeZoneViolations(airVehicleState, errorLog);

    // report any errors that occured in constructionisKeepInZone
    string errors = errorLog.str();
    if (errors.length()>0) {
        std::cerr << errors;
    }

    // report each detected violation
    if (violationsPtr != NULL) {
        for (int i = 0; i<violationsPtr->size(); i++) {
            sendSharedLmcpObjectBroadcastMessage((*violationsPtr)[i]);
        }

        violationsPtr->clear();
        delete violationsPtr;
    }

    return true;

}


}; //namespace service
}; //namespace uxas
