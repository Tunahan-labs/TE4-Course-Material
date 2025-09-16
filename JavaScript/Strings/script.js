console.log("Hello, World!");

let name = "Alice Rivera";
let age = 30;
let city = "New York";

/*let greeting =
  "Hello, my name is " +
  name +
  ", I am " +
  age +
  " years old and I live in " +
  city +
  ".";*/
let greeting = `Hello, my name is ${name}, I am ${age} years old and I live in ${city}.`;

console.log(greeting);
console.log(greeting.length);
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.replace("Alice", "Bob"));
console.log(greeting.includes("New York"));

const firstName = "John";
const lastName = "Doe";
const Introduction = `Hello, my name is ${firstName} ${lastName}`;
console.log(Introduction);

let day = 16;
let Month = "September";
let year = 2025;

console.log(`Today is ${Month} ${day} ${year}.`);
