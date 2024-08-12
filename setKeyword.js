class Student {
    constructor(name, age) {
        // The underscore convention is used to indicate that this is a private property.
      this._name = name;  
      this._age = age;
    }
  
 
    get name() {
      return this._name;
    }

    set name(newName) {
      if (newName && typeof newName === 'string') {
        this._name = newName;
      } else {
        console.log("Invalid name");
      }
    }
  

    get age() {
      return this._age;
    }
  

    set age(newAge) {
      if (newAge > 0) {
        this._age = newAge;
      } else {
        console.log("Invalid age");
      }
    }
  }
  
  const student1 = new Student("Alice", 20);
  
  // Using the setter to change the name
  student1.name = "Bob"; 
  
  console.log(student1.name); 
  
 
  student1.age = -5; 
  