"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.greet = function () {
        console.log("Hello, I\u2019m ".concat(this.name, " and I\u2019m ").concat(this.age, " years old."));
    };
    return User;
}());
var user1 = new User("Alice", 25);
user1.greet(); // Hello, I’m Alice and I’m 25 years old.
