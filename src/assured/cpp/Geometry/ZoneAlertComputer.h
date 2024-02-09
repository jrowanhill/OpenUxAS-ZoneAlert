/** A pure virtual defining the interface for zone alert computation.
*/
class ZoneAlertComputer {

public:

    virtual bool storeDeclaredZone() = 0;

    virtual bool registerDeclaredVehicle() = 0;

    virtual bool processVehicleState() = 0;

    virtual bool computeZoneAlerts() = 0;

};