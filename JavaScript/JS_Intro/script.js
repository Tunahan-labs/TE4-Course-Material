let name = "Tuna";
let age = 19;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

console.log("Type of name:", typeof name);
console.log("Type of age:", typeof age);
console.log("Type of isStudent:", typeof isStudent);

age += 1;
isStudent = false;

console.log("Updated Age:", age);
console.log("Updated Is Student:", isStudent);

let introduction = `Hi, my name is ${name}. I am ${age} years old and I am ${
  isStudent ? "a student" : "not a student"
}.`;

console.log(introduction);
