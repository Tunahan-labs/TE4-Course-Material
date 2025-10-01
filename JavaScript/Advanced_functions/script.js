// 1
const square = (x) => {
  return x * x;
};
console.log(square(10));

//2
function doHomework(subject, callback) {
  console.log(`Finished my ${subject} homework.`);
  callback();
}

function doneHomework() {
  console.log("All done!");
}

doHomework("math", doneHomework);

// 3
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5));
console.log(multiply(5, 2));

// 4
function maxNumbers(...numbers) {
  return Math.max(...numbers);
}
console.log(maxNumbers(1, 2, 3, 4, 5));

// 5
const oldArray = ["HTML", "CSS"];
const newArray = [...oldArray, "JavaScript"];
console.log(newArray);
