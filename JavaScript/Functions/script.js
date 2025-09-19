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

//Default parameters
const greet = function (name = "Guest") {
  return `Welcome, ${name}!`;
};
console.log(greet());
console.log(greet("Alice"));

//early return
const showTemo = (temp) => {
  if (temp < 0) return "It's freezing!";
  if (temp < 20) return "It's cool!";
  if (temp > 20 && temp < 40) return `It's warm!`;
  return "It's hot!";
};
console.log(showTemo(45));

//*Exercise 1
const calcBMI = function (name, age, weight, height) {
  const bmi = weight / height ** 2;
  return `Name: ${name}, Age: ${age}, BMI: ${bmi.toFixed(2)}`;
};
console.log(calcBMI("Alice", 19, 60, 1.65));
console.log(calcBMI("Bob", 21, 80, 1.85));

//*Exercise 2
const checkGrade = (name, score) => {
  if (score >= 90 && score <= 100)
    return `${name} got an A with a score of ${score}.`;
  if (score >= 80 && score <= 89)
    return `${name} got a B with a score of ${score}.`;
  if (score >= 70 && score <= 79)
    return `${name} got a C with a score of ${score}.`;
  if (score >= 60 && score <= 69)
    return `${name} got a D with a score of ${score}.`;
  if (score < 60 && score >= 0)
    return `${name} got a F with a score of ${score}.`;
  return `Invalid score!`;
};
console.log(checkGrade("Ryan", 91));
console.log(checkGrade("Alice", 85));
console.log(checkGrade("Bob", 72));
console.log(checkGrade("Tyrone", 63));
console.log(checkGrade("Ali", 54));
console.log(checkGrade("Tuna", 666));
