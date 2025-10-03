//Exercise 1
//(a)
const movies = ["Interstellar", "Arrival", "Salt", "Avatar", "Braveheart"];
console.log(movies[1]);
//(b)
movies.push("Gravity");
console.log(movies);
movies.shift();
console.log(movies);

//Exercise 2
//(a)
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map((n) => n ** 2);
console.log(squared);
//(b)
const oddNumbers = numbers.filter((n) => n % 2 !== 0);
console.log(oddNumbers);

//Exercise 3
//(a)
const board = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];
console.log(board[1][1]);
//(b)
const nums = [10, 20, 30, 40, 50];
let sum = nums.reduce((total, n) => total + n, 0);
console.log(sum);
