"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dir = 1 /* Direction.East */; // 1
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
function checkAccess(role) {
    if (role === Role.Admin) {
        console.log("Full access granted.");
    }
    else {
        console.log("Limited access.");
    }
}
