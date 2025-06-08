"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Alice",
    age: 25
};
var person = {
    name: "Bob",
    greet: function (msg) {
        console.log("".concat(msg, ", I\u2019m ").concat(this.name));
    }
};
