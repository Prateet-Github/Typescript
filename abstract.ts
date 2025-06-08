// An abstract class is like a blueprint for other classes.
// You can’t create an object from it directly — it’s meant to be extended by other classes.

abstract class Animal {
  abstract makeSound(): void;  // must be implemented by subclasses

  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.makeSound();  // Woof!
dog.move();       // Moving...

// const animal = new Animal(); // ❌ Error: Cannot create an instance of an abstract class

export {};