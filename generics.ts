// Generics allow you to write reusable, type-safe, and flexible code — especially for functions, classes, and interfaces.

// without generics

// function identity(val: any): any {
//   return val;
// }

// with generics

function identity<T>(val: T): T {
  return val;
}

const num = identity<number>(5);     // type-safe
const str = identity<string>("hi");  // type-safe

// Using generics with arrays

let numbers: Array<number> = [1, 2, 3]; // let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"]; // let strings: string[] = ["a", "b", "c"];

export {};