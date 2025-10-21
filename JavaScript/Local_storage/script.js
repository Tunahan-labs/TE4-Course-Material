console.log("Hello World!");

// * 1. SAVE USERNAME (just an example)
//localStorage.setItem("name", "Frank");

// * 2. CREATE ELEMENTS
const clearButton = document.createElement("button");
const themeToggle = document.createElement("button");
const para = document.createElement("p");
const input = document.createElement("input");

// * 3. ATTACH THEM TO PAGE
document.body.append(clearButton, para, themeToggle, input);

// * 4. INITIAL UI SETUP
clearButton.innerText = "Clear localStorage";
themeToggle.innerText = "Toggle Dark/Light Theme";
para.textContent = localStorage.getItem("name");
input.type = "text";
input.placeholder = "Type something to auto-save";
input.value = localStorage.getItem("autosave") || "";

// * 5. THEME TOGGLE (localStorage remembers theme)
themeToggle.addEventListener("click", () => {
  const currentTheme = localStorage.getItem("theme");

  // * If current theme is dark → switch to light, else → switch to dark
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // * override body class and save to localStorage
  document.body.className = newTheme;
  localStorage.setItem("theme", newTheme);
});
// * 6. CLEAR EVERYTHING
clearButton.addEventListener("click", () => {
  localStorage.clear();
  para.textContent = "";
  input.value = "";
});

// * 7. AUTO-SAVE TEXT INPUT
input.addEventListener("input", () => {
  localStorage.setItem("autosave", input.value);
});

// * 8. APPLY AUTO-SAVED VALUE ON RELOAD
window.addEventListener("load", () => {
  const savedValue = localStorage.getItem("autosave");
  if (savedValue) input.value = savedValue;
});

// * 9. MULTI TAB THEME SYNC AND INPUT SYNC
window.addEventListener("storage", (e) => {
  if (e.key === "theme") {
    document.body.className = e.newValue;
  }
  if (e.key === "autosave") {
    input.value = e.newValue;
  }
});

//! Exercise
//! A 1.
const nameInput = document.getElementById("name-input");
const DEFAULT_NAME = "Tuna";

let savedName = localStorage.getItem("name");
if (savedName === null) {
  savedName = DEFAULT_NAME;
  localStorage.setItem("name", savedName);
}

if (nameInput) {
  nameInput.value = savedName;
  para.textContent = savedName;

  nameInput.addEventListener("input", () => {
    const v = nameInput.value;
    localStorage.setItem("name", v);
    para.textContent = v;
  });
} else {
  para.textContent = savedName;
}

//! A 2.
const nameBtn = document.getElementById("remove-name");
if (nameBtn) {
  nameBtn.addEventListener("click", () => {
    localStorage.removeItem("name");
    if (nameInput) nameInput.value = "";
  });
}

//! B 1.
// Dark Mode Toggle (remembers via localStorage)
const themeToggleButton = document.getElementById("theme-toggle");

// Apply and persist theme
const applyTheme = (theme) => {
  document.body.className = theme; // stays consistent with other theme handlers
  localStorage.setItem("theme", theme);
};

// Initialize from storage (default to light)
applyTheme(localStorage.getItem("theme") || "light");

// Toggle on click
themeToggleButton?.addEventListener("click", () => {
  const next = localStorage.getItem("theme") === "dark" ? "light" : "dark";
  applyTheme(next);
});

//! C 1.
const form = document.getElementById("myForm");

// Restore saved data
window.onload = () => {
  [...form.elements].forEach((el) => {
    if (el.name) el.value = sessionStorage.getItem(el.name) || "";
  });
};

// Save on input
form.addEventListener("input", (e) => {
  if (e.target.name) sessionStorage.setItem(e.target.name, e.target.value);
});

//! C 2.
// Parse and stringify via JSON
const read = () => JSON.parse(localStorage.getItem("todos") || "[]");
const write = (t) => localStorage.setItem("todos", JSON.stringify(t));

// App structure
const app = document.createElement("section");
app.innerHTML = `
  <h2>To-Do</h2>
  <form id="t-form">
    <input id="t-input" placeholder="Add a task" />
    <button>Add</button>
  </form>
  <button id="t-clear" type="button">Clear All</button>
  <ul id="t-list"></ul>
`;
document.body.appendChild(app);

// Elements
const inputTask = app.querySelector("#t-input");
const list = app.querySelector("#t-list");

// Render tasks
function render() {
  list.innerHTML = "";
  read().forEach((text, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${text}</span> <button data-i="${i}">Delete</button>`;
    list.appendChild(li);
  });
}

// Add task
app.querySelector("#t-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const v = inputTask.value.trim();
  if (!v) return;
  write([...read(), v]);
  inputTask.value = "";
  render();
});

// Delete button
list.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  const i = +e.target.dataset.i;
  const t = read();
  t.splice(i, 1);
  write(t);
  render();
});

// Clear all button
app.querySelector("#t-clear").addEventListener("click", () => {
  localStorage.removeItem("todos");
  render();
});

render();
