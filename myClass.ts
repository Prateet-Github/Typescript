class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, I’m ${this.name} and I’m ${this.age} years old.`);
  }
}

const user1 = new User("Alice", 25);
user1.greet(); // Hello, I’m Alice and I’m 25 years old.

export {};