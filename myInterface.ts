 // interface vs type in TypeScript

// TypeScript allows you to define custom types using either `interface` or `type`.

// Both can be used to describe the shape of an object, but they have some differences in usage and capabilities.

 interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Alice",
  age: 25
};

interface Greeter {
  name: string;
  greet(message: string): void;
}

const person: Greeter = {
  name: "Bob",
  greet(msg) {
    console.log(`${msg}, I’m ${this.name}`);
  }
};

export {}