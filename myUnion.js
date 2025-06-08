var score;
score = 100; // ✅ OK
score = "A+"; // ✅ OK
// score = true;  // ❌ Error
function printId(id) {
    console.log("Your ID is: " + id);
}
printId(101); // ✅
printId("A101"); // ✅
var data = [1, "two", 3, "four"]; // union type in an array
