"use strict";
// // Type predicates let you define custom logic to narrow down the type of a variable — especially useful when dealing with union types or interfaces.
Object.defineProperty(exports, "__esModule", { value: true });
function isAdmin(user) {
    return "accessLevel" in user;
}
function getPermissions(user) {
    if (isAdmin(user)) {
        console.log("Admin access:", user.accessLevel);
    }
    else {
        console.log("Guest access only");
    }
}
