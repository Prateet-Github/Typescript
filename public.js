var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hi, I'm ".concat(this.name));
    };
    return Person;
}());
var p = new Person("Alice");
console.log(p.name); // ✅ Accessible
