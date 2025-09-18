//Functions

//Function declaration
//!hoisted
function sayHello(name, age) {
  return `Hello, my name is ${name} and I'm ${age} years old!`;
}
console.log(sayHello("Alice", 19));
console.log(sayHello("Bob", 21));

//Function expression
//!not hoisted
const add = function (a, b) {
  return a + b;
};
console.log(add(2, 6));

//Function arrow
//!not hoisted
const subtract = (a, b) => a - b;
console.log(subtract(6, 2));

//*Exercise
const calcBMI = function (name, age, weight, height) {
  const bmi = weight / height ** 2;
  return `Name: ${name}, Age: ${age}, BMI: ${bmi.toFixed(2)}`;
};

console.log(calcBMI("Alice", 19, 60, 1.65));
console.log(calcBMI("Bob", 21, 80, 1.85));
