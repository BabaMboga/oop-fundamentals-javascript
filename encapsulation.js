class Person {
    #name;  // Private field
    #age;   // Private field
  
    constructor(name, age) {
      this.#name = name;
      this.#age = age;
    }
  
    get name() {
      return this.#name;
    }
  
    set name(newName) {
      this.#name = newName;
    }
  
    get age() {
      return this.#age;
    }
  
    set age(newAge) {
      if (newAge > 0) {
        this.#age = newAge;
      }
    }
  
    displayInfo() {
      console.log(`Name: ${this.#name}, Age: ${this.#age}`);
    }
  }
  
  const person1 = new Person("Alice", 30);
  person1.displayInfo();    
  person1.age = 35;
  person1.displayInfo();    
  