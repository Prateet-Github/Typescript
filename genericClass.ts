// Generic classes let you define classes that work with any data type, while keeping the type safety of TypeScript.

// 🧠 Explanation
// 	•	T is a placeholder for a type that will be specified when creating an object.
// 	•	Box<string> → T becomes string
// 	•	Box<number> → T becomes number

class Box<T> {
  contents: T;

  constructor(value: T) {
    this.contents = value;
  }

  getContents(): T {
    return this.contents;
  }
}

const stringBox = new Box<string>("Hello");
const numberBox = new Box<number>(123);

export{}
