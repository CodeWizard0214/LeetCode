class ParkingSystem {
  constructor(big, medium, small) {
    this.slots = {
      1: big,   // number of slots for big cars
      2: medium, // number of slots for medium cars
      3: small   // number of slots for small cars
    };
  }

  addCar(carType) {
    if (this.slots[carType] > 0) {
      // if a parking slot is available for the given car type
      this.slots[carType]--;  // decrement the number of available slots
      return true;             // allow the car to park and return true
    } else {
      return false;            // otherwise, return false indicating that the car can't park
    }
  }
}