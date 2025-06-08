// Type narrowing means refining a variable’s type to a more specific type based on runtime checks.

// ✅ Why it’s useful

// When a variable can have multiple types (like string | number), narrowing helps TypeScript figure out which specific type it is in a certain block of code.

function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // id is string here
  } else {
    console.log(id.toFixed(2)); // id is number here
  }
}

export {}