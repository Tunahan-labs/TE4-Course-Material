("use strict");

// Exercise
// A
const studentJSON = '{"name":"Liam","grade":4,"passed":true}';
const obj = JSON.parse(studentJSON);
console.log(`NAME: ${obj.name}`);
const backToJSON = JSON.stringify(obj);
console.log(backToJSON);

// B
const fetchUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    data.forEach((item) => {
      console.log(`NAME: ${item.name}, EMAIL: ${item.email}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
  }
};
fetchUsers();

// C
document.addEventListener("DOMContentLoaded", () => {
  const box = document.body.appendChild(document.createElement("div"));
  box.innerHTML =
    "<blockquote></blockquote><cite></cite><button>New Quote</button>";
  const [q, a, btn] = box.children;

  async function load() {
    try {
      btn.disabled = true;
      btn.textContent = "Loading...";
      const { content, author } = await fetch(
        "http://api.quotable.io/random"
      ).then((r) => r.json());
      q.textContent = `“${content}”`;
      a.textContent = author ? `— ${author} ` : "";
    } catch {
      q.textContent = "Failed to load quote.";
      a.textContent = "";
    } finally {
      btn.disabled = false;
      btn.textContent = "New Quote";
    }
  }

  btn.onclick = load;
  load();
});
