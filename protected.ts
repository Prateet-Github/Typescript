// The protected modifier in TypeScript is like private, but with one key difference:

// It allows access within the class itself and its subclasses, but not from outside.

class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  protected speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} barks.`); // ✅ allowed (in subclass)
    this.speak(); // ✅ allowed
  }
}

const dog = new Dog("Buddy");
dog.bark();             // Buddy barks.
// dog.name;            // ❌ Error: 'name' is protected
// dog.speak();         // ❌ Error: 'speak' is protected