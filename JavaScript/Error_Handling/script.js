// Exercise
// A
function multiply(a, b) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    Number.isNaN(a) ||
    Number.isNaN(b)
  ) {
    throw new TypeError("Both arguments must be numbers");
  }
  return a * b;
}
const safeMultiply = (a, b) => {
  try {
    return multiply(a, b);
  } catch (error) {
    return error.message;
  }
};
console.log(safeMultiply(2, 3)); // 6
console.log(safeMultiply(2, "3")); // "Both arguments must be numbers"

// B
function getUserAge(obj) {
  if (obj.age == null) {
    throw new Error("User must have an age!");
  }
  return obj.age;
}
const tryUserAge = (obj) => {
  try {
    return getUserAge(obj);
  } catch (error) {
    return error.message;
    // C
  } finally {
    setTimeout(() => {
      console.log("Execution completed!");
    }, 100);
  }
};
console.log(tryUserAge({ age: 25 }));
console.log(tryUserAge({}));
