class Car {
  constructor() {
    this.wheels = 4;
    this.mileageInfo = null;
  }
}

class Toyota extends Car {
  constructor() {
    super();
  }
}

module.exports = { Car, Toyota };