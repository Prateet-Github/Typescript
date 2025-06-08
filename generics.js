"use strict";
// Generics allow you to write reusable, type-safe, and flexible code — especially for functions, classes, and interfaces.
Object.defineProperty(exports, "__esModule", { value: true });
// without generics
// function identity(val: any): any {
//   return val;
// }
// with generics
function identity(val) {
    return val;
}
var num = identity(5); // type-safe
var str = identity("hi"); // type-safe

