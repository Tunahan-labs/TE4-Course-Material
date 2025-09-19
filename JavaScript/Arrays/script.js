const Fruits = [
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Pineapple",
  "Watermelon",
  "Grapes",
  "Strawberry",
  "Blueberry",
  "Raspberry",
  "Peach",
  "Cherry",
  "Pear",
  "Papaya",
  "Pomegranate",
];
console.log(Fruits.length); // 15
console.log(Fruits[0]); // Banana
console.log(Fruits.splice(2, 1)); // ['Apple']
console.log(Fruits.push("Kiwi"));
console.log(Fruits.pop()); // Kiwi

//exercise 1
const colours = ["Red", "Green", "Blue"];
console.log(colours[0]);
console.log(colours[2]);

colours.push("Yellow");
console.log(colours);

//exercise 2
const numbers = [10, 20, 30, 40, 50];
numbers.splice(2, 1, 99);
console.log(numbers);

for (const number of numbers) {
  console.log(number * 2);
}

//exercise 3
const shoppingCart = ["Salt", "Milk", "Bread", "Eggs", "Cheese"];
console.log(shoppingCart);
shoppingCart.push("Butter");
console.log(shoppingCart);
shoppingCart.unshift("Sugar");
console.log(shoppingCart);
shoppingCart.splice(3, 1);
console.log(shoppingCart.includes("Milk"));
console.log(shoppingCart);
