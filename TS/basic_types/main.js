/* console.log("Hello TS!");

//! string
let firstName: string = "John";
firstName = "Doe";
let age = 30;
let greeting: string = `Hello, my name is ${firstName} and I am ${age} years old.`;
console.log(greeting);

//! number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(
  `Decimal: ${decimal}, Hex: ${hex}, Binary: ${binary}, Octal: ${octal}`
);

//! boolean
let isLoggedIn: boolean = true;
let isError: boolean = false;
let isLoading: boolean = true;
if (isLoggedIn && !isError) {
  console.log("User is logged in and there are no errors.");
} else if (isLoading) {
  console.log("Loading...");
} else {
  console.log("User is not logged in or there is an error.");
}

//! array
let users: string[] = ["Alice", "Bob", "Charlie", "Diana"];
users.push("Eve");
console.log(users);
let points: number[] = [10, 20, 30, 40];
console.log(points);

//! object
type Point = {
  x: number;
  y: number;
  label: string;
  //* label?: string; // optional property
};

let p1: Point = {
  x: 10,
  y: 20,
  label: "start point",
};

console.log(`${p1.label} is at (${p1.x}, ${p1.y})`);

//! tuple
type RGB = [number, number, number];
let primaryColor: RGB = [255, 0, 255];
console.log(
  `Primary color RGB: (${primaryColor[0]}, ${primaryColor[1]}, ${primaryColor[2]})`
);

//! Emum
enum Direction {
  up,
  down,
  left,
  right,
}

let playerDirection: Direction = Direction.up;
if (playerDirection === Direction.up) {
  console.log(`up value is ${playerDirection}`);
}

//! null
let studentName: string | null = null;
console.log(`Student Name: ${studentName}`);
studentName = "Alice";
console.log(`Student Name: ${studentName}`);

//! function
const logMessage = (name: string): void => {
  const message: string = `Hello, ${name}!`;
  console.log(message);
};
logMessage("Alice");

const calculateArea = (length: number, width: number): number => {
  return length * width;
};
console.log(calculateArea(5, 10));

//! unknown
let data1: unknown = "person";
if (typeof data1 === "string") console.log(data1.toUpperCase());

//! union
let userId: string | number;
userId = "Tuna";
userId = 12345;

const showUserId = (id: string | number): void => {
  if (typeof id === "number") {
    console.log(`User ID is a number: ${id.toFixed()}`);
  } else {
    console.log(`User ID is a string: ${id.toUpperCase()}`);
  }
};
showUserId(userId); */
//* Exercise - primitive and union types
// 1.
var userName = "Tuna";
// 2.
var highScore = 0;
// 3.
var isLoggedIn = false;
// 4.
var countdown;
//* Exercise - array and object types
// 1.
var gameTags = [
    "action",
    "multiplayer",
    "rpg",
    "adventure",
    "strategy",
];
// 3.
var currentScore = {
    points: 100,
    isFinal: false,
};
// 4.
var userSetting;
//* Exercise - function types
// 1.
var logError = function (err) {
    console.log(err);
};
logError("An error occured!");
// 2.
function calculatePercentage(value, total) {
    if (total === 0)
        return 0;
    return (value / total) * 100;
}
// 3.
var percentResult = calculatePercentage(25, 200);
console.log("Percentage result: ".concat(percentResult));
