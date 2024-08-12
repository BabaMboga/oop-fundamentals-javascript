class Animal {
  makeSound() {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow");
  }
}

const animals = [new Dog(), new Cat()];

console.log(animals.forEach((animal) => animal.makeSound()));

// animals.forEach((animal) => animal.makeSound());
