// Enums allow you to define a set of named constants — a great way to give friendly names to sets of values (like days, status codes, roles, etc.).

const enum Direction { // use `const enum` for better performance, as it will be inlined at compile time
  North,   // 0
  East,    // 1
  South,   // 2
  West     // 3
}

let dir: Direction = Direction.East;  // 1


enum Role { 
  Admin,
  User,
  Guest
}

function checkAccess(role: Role) {
  if (role === Role.Admin) {
    console.log("Full access granted.");
  } else {
    console.log("Limited access.");
  }
}


export {}