"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name) {
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "name", {
        // Getter
        get: function () {
            return this._name;
        },
        // Setter
        set: function (newName) {
            if (newName.length < 3) {
                throw new Error("Name is too short!");
            }
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var p = new Person("Alice");
console.log(p.name); // ✅ Gets via getter
p.name = "Bob"; // ✅ Sets via setter
console.log(p.name); // Bob
p.name = "Al"; // ❌ Error: Name is too short!
