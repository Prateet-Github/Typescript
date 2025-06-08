class Person {
  public name: string; // same as just `name: string`

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const p = new Person("Alice");
console.log(p.name); // ✅ Accessible

export {};