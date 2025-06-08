"use strict";
// The instanceof operator is used to check whether an object is an instance of a specific class. It’s a runtime check that also enables type narrowing in TypeScript.
Object.defineProperty(exports, "__esModule", { value: true });
// object instanceof ClassName
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving a car...");
    };
    return Car;
}());
var Bike = /** @class */ (function () {
    function Bike() {
    }
    Bike.prototype.ride = function () {
        console.log("Riding a bike...");
    };
    return Bike;
}());
function useVehicle(vehicle) {
    if (vehicle instanceof Car) {
        vehicle.drive(); // vehicle is narrowed to Car
    }
    else {
        vehicle.ride(); // vehicle is narrowed to Bike
    }
}
