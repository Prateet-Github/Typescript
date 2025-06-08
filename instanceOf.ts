// The instanceof operator is used to check whether an object is an instance of a specific class. It’s a runtime check that also enables type narrowing in TypeScript.

// syntax : object instanceof ClassName

class Car {
  drive() {
    console.log("Driving a car...");
  }
}

class Bike {
  ride() {
    console.log("Riding a bike...");
  }
}

function useVehicle(vehicle: Car | Bike) {
  if (vehicle instanceof Car) {
    vehicle.drive();  // vehicle is narrowed to Car
  } else {
    vehicle.ride();   // vehicle is narrowed to Bike
  }
}

export {}