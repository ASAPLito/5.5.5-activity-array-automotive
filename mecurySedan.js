//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class car extends Vehicle {
    constructor(){
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduledService = false;
        super();
    }

    loadPassenger(num){
        let availableRoom;
        if (passenger < this.maximumPassengers){
            availableRoom = true;
            return availableRoom;
        }

    }

    start(){
        if(fuel > 0){
            return true;
    }

    scheduleService(mileage){
        let timeForMaintenance;
        if(mileage > 30000){
            timeForMaintenance = true;
            return timeForMaintenance;
        } else{
            timeForMaintenance = false;
            return timeForMaintenance;
        }
    }

}