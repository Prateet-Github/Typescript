let score: number | string;

score = 100;      // ✅ OK
score = "A+";     // ✅ OK

// score = true;  // ❌ Error

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

printId(101);      // ✅
printId("A101");   // ✅


let data: (number | string)[] = [1, "two", 3, "four"]; // union type in an array


export {}