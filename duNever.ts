// Discriminated Unions and Exhaustiveness checking using never in TypeScript — these two concepts work together to help you safely handle all cases in a union type.

// ✅ Benefits
// 	•	Catches missing cases at compile time
// 	•	Keeps your code type-safe and future-proof
// 	•	Works great in complex systems like reducers or UI logic


type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "rectangle"; width: number; height: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.side ** 2;

    case "rectangle":
      return shape.width * shape.height;

    default:
      // 🛑 Exhaustiveness check
      const _exhaustiveCheck: never = shape;
      throw new Error(`Unhandled shape: ${_exhaustiveCheck}`);
  }
}

export {}