"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "John Doe",
    age: 30,
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
createUser({ name: "Jane Doe", isActive: true });
function createCourse() {
    return { name: "TypeScript Basics", isActive: true };
}
