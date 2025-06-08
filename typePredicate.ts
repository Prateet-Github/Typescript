// // Type predicates let you define custom logic to narrow down the type of a variable — especially useful when dealing with union types or interfaces.

// ✅ When to Use Type Predicates
// 	•	To narrow a union (A | B)
// 	•	When using interfaces or object types (not just classes)
// 	•	For complex type checks that in, typeof, or instanceof can’t handle

interface Admin {
  role: "admin";
  accessLevel: number;
}

interface Guest {
  role: "guest";
}

function isAdmin(user: Admin | Guest): user is Admin {
  return "accessLevel" in user;
}

function getPermissions(user: Admin | Guest) {
  if (isAdmin(user)) {
    console.log("Admin access:", user.accessLevel);
  } else {
    console.log("Guest access only");
  }
}

export {}