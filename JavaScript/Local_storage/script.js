/*//* Local Storage Example
const TunasFruits = ["Banana", "Orange", "Grapes"];
const stringifiedFruits = JSON.stringify(TunasFruits);
localStorage.setItem("Fruits", stringifiedFruits);
console.log(TunasFruits);
const FranksFruits = localStorage.getItem("Fruits");
console.log(FranksFruits);
localStorage.removeItem("Fruits");

//* Session Storage Example
const TunasVegetables = ["Carrot", "Broccoli", "Spinach"];
const stringifiedVegetables = JSON.stringify(TunasVegetables);
sessionStorage.setItem("Vegetables", stringifiedVegetables);
console.log(TunasVegetables);

//* Parsing Example
const loggedUser = {
  name: "Tuna",
  city: "Stockholm",
  age: 19,
};
const stringifiedUser = JSON.stringify(loggedUser);
localStorage.setItem("User", stringifiedUser);
const userLocal = localStorage.getItem("User");
const parsedUser = JSON.parse(userLocal);
console.log(parsedUser.name);

//* Theme switcher Example
// listens for changes from another tab
window.addEventListener("storage", (e) => {
  console.log("Key changed:", e.key);
  console.log("New value:", e.newValue);
});

const themeToggleButton = document.getElementById("theme-toggle");
const toggleTheme = () => {
  // dark or light
  const currentTheme = localStorage.getItem("Theme");

  if (currentTheme === "dark") {
    document.body.classList.remove("dark");
    localStorage.setItem("Theme", "light");
  } else {
    document.body.classList.add("dark");
    localStorage.setItem("Theme", "dark");
  }
};
themeToggleButton.addEventListener("click", toggleTheme);

window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("Theme") === "dark";
  if (savedTheme) {
    document.body.classList.add("dark");
  }
});

// Autosave form with session storage
const form = document.querySelector("form");
const input = document.querySelector("#username");

input.value = sessionStorage.getItem("username") || "";

input.addEventListener("input", () => {
  sessionStorage.setItem("username", input.value);
});*/

//! Exercise
//! A 1.
const name = "Tuna";
const stringifiedName = JSON.stringify(name);
localStorage.setItem("name", stringifiedName);
document.getElementById("name").textContent = name;

//! A 2.
const nameBtn = document.getElementById("remove-name");
nameBtn.addEventListener("click", () => {
  localStorage.removeItem("name");
  document.getElementById("name").textContent = "";
});

//! B 1.
const themeToggleButton = document.getElementById("theme-toggle");
const toggleTheme = () => {
  // dark or light
  const currentTheme = localStorage.getItem("Theme");

  if (currentTheme === "dark") {
    document.body.classList.remove("dark");
    localStorage.setItem("Theme", "light");
  } else {
    document.body.classList.add("dark");
    localStorage.setItem("Theme", "dark");
  }
};
themeToggleButton.addEventListener("click", toggleTheme);

window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("Theme") === "dark";
  if (savedTheme) {
    document.body.classList.add("dark");
  }
});

//! C 1.
const input = document.getElementById("username");
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  sessionStorage.setItem("username", input.value);
});

input.addEventListener("input", () => {
  sessionStorage.setItem("username", input.value);
});
