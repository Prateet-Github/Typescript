"use strict";
// Generic classes let you define classes that work with any data type, while keeping the type safety of TypeScript.
Object.defineProperty(exports, "__esModule", { value: true });
// 🧠 Explanation
// 	•	T is a placeholder for a type that will be specified when creating an object.
// 	•	Box<string> → T becomes string
// 	•	Box<number> → T becomes number
var Box = /** @class */ (function () {
    function Box(value) {
        this.contents = value;
    }
    Box.prototype.getContents = function () {
        return this.contents;
    };
    return Box;
}());
var stringBox = new Box("Hello");
var numberBox = new Box(123);
