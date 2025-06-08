class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  // Getter
  get name(): string {
    return this._name;
  }

  // Setter
  set name(newName: string) {
    if (newName.length < 3) {
      throw new Error("Name is too short!");
    }
    this._name = newName;
  }
}

const p = new Person("Alice");
console.log(p.name); // ✅ Gets via getter

p.name = "Bob";      // ✅ Sets via setter
console.log(p.name); // Bob

p.name = "Al";       // ❌ Error: Name is too short!

export {};