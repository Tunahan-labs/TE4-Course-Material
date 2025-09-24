/*const mainTitle = document.getElementById("main-title");
console.log(mainTitle.innerText);
mainTitle.innerText = "Wecome to our JS DOM basics class!";

const headings = document.querySelectorAll(".h2-item");
for (const heading of headings) {
  heading.style.color = "Purple";
}

list = document.querySelector("ul");
const newListItem = document.createElement("li");
newListItem.textContent = "Hi!";
newListItem.classList.add("list-item");
list.appendChild(newListItem);
list.remove();

const button = document.createElement("button");
const body = document.querySelector("body");
body.appendChild(button);
button.innerText = "Click me!";
button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.padding = "10px";

button.addEventListener("click", () => {
  window.alert("DAYUM!! YOU CLICK GUUUUUD!!!");
  button.style.backgroundColor = "red";
});

const box = document.createElement("div");
box.style.width = "300px";
box.style.height = "300px";
box.style.backgroundColor = "red";
box.style.transition = "all 200ms ease-in";

body.appendChild(box);

box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "blue";
});

box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "red";
});

const log = document.getElementById("log");
const input = document.getElementById("input");

input.addEventListener("keydown", (event) => {
  log.textContent = `Key pressed: ${event.key}`;
  if (event.key === "ö" || event.key === "ä" || event.key === "å")
    window.alert("Forbidden key!");
});
input.addEventListener("keyup", (event) => {
  log.textContent = `Key released: ${event.key}`;
});

const form = document.getElementById("form");
const status = document.getElementById("status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.textContent = "Form submitted!";

  setTimeout(() => {
    status.textContent = "";
  }, 3000);
});*/

//*Mouse Events*//
const body = document.querySelector("body");
const box = document.createElement("div");
box.style.width = "300px";
box.style.height = "300px";
box.style.border = "2px solid black";
box.style.transition = "all 200ms ease-in";

body.appendChild(box);

box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "red";
});

box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "white";
});

//*Keyboard Events*//
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

inputText.addEventListener("keydown", () => {
  outputText.textContent = `Keys pressed: ${inputText.value.length}`;
});

//*Form Events*//
const form = document.getElementById("form");
const status = document.getElementById("status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (form.formInput.value.length < 3) {
    window.alert("Input must be at least 3 characters long!");
    status.textContent = "Form submission failed!";
    status.style.color = "red";
  } else {
    status.textContent = "Form submitted successfully!";
    status.style.color = "green";
    form.formInput.value = "";
  }
  setTimeout(() => {
    status.textContent = "";
  }, 3000);
});

//*scroll event*//
const scrollProgress = document.getElementById("progress-bar");
scrollProgress.style.border = "1px solid black";
scrollProgress.style.height = "5px";
scrollProgress.style.width = "0%";
scrollProgress.style.backgroundColor = "green";
scrollProgress.style.position = "fixed";
scrollProgress.style.top = "0";
scrollProgress.style.left = "0";
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  scrollProgress.style.width = `${scrollPercent}%`;
});

//*Resize event*//
const resize = document.getElementById("size");
window.addEventListener("resize", () => {
  if (window.innerWidth < 600 && window.innerWidth > 598) {
    window.alert("Window is too small!");
  } else {
    resize.textContent = "";
  }
});
