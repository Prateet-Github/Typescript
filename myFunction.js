"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(3); // This will return 5
// addTwo('3'); // This will cause a type error if strict mode is enabled
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return '200 ok';
}
