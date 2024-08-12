class Animal {
    static description() {
      return "Animals are living beings that can move and respond to stimuli.";
    }
  }
  
  class Dog extends Animal {
    static description() {
      return super.description() + " Dogs are domesticated mammals, typically kept as pets.";
    }
  }
  
  console.log(Dog.description());
  