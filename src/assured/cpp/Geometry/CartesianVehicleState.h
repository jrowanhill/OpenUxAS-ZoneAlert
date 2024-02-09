
class CartesianVehicleState {

public: 
    CartesianVehicleState(VehicleState& vehicleState) {
    }

    ~CartesianVehicleState() {

    }

    private: 
        float location[3];
        float velocity[3];
};