class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    start() {
      this._startEngine();
      console.log(`${this.make} ${this.model} is starting...`);
    }
  
    _startEngine() {
      console.log("Engine started");
    }
  }
  
  const myCar = new Car("Toyota", "Corolla");
  myCar.start();
  