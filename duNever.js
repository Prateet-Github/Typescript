"use strict";
// Discriminated Unions and Exhaustiveness checking using never in TypeScript — these two concepts work together to help you safely handle all cases in a union type.
Object.defineProperty(exports, "__esModule", { value: true });
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.side, 2);
        case "rectangle":
            return shape.width * shape.height;
        default:
            // 🛑 Exhaustiveness check
            var _exhaustiveCheck = shape;
            throw new Error("Unhandled shape: ".concat(_exhaustiveCheck));
    }
}
