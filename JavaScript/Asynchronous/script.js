"use strict";

// Exercises
// A1.
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function greetLater() {
  let greet = "Hello, Async World!";
  await wait(3000);
  console.log(greet);
}
greetLater();

// A2.
async function fetchTodo() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const todo = await res.json();
    console.log(todo);
  } catch (err) {
    console.error("Failed to fetch todo:", err);
  }
}
fetchTodo();

// B1.
async function fetchUsersAndPosts() {
  try {
    const [usersRes, postsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
    ]);
    if (!usersRes.ok || !postsRes.ok) {
      throw new Error(`HTTP users:${usersRes.status} posts:${postsRes.status}`);
    }
    const [users, posts] = await Promise.all([
      usersRes.json(),
      postsRes.json(),
    ]);
    console.log({ users, posts });
  } catch (err) {
    console.error("Failed to fetch users and posts:", err);
  }
}
fetchUsersAndPosts();

// B2.
async function fetchUsersAndPostsRetry(url, options = {}, delayMs = 500) {
  let attempts = 0;
  while (attempts < 3) {
    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      console.log("Fetched data:", data);
      return;
    } catch (err) {
      attempts++;
      console.warn(`Attempt ${attempts} failed:`, err);
      if (attempts < 3) {
        console.log(`Retrying in ${delayMs}ms...`);
        await wait(delayMs);
      } else {
        console.error("All attempts failed.");
      }
    }
  }
}
const testUrl = "https://jsonplaceholder.typicode.com/posts/1";
fetchUsersAndPostsRetry(testUrl);

// C1.
async function fetchFirstPostAndComments() {
  try {
    const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!postsRes.ok) throw new Error("Failed to fetch posts");
    const posts = await postsRes.json();
    const firstPost = posts[0];
    console.log("First post:", firstPost);
    const commentsRes = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${firstPost.id}/comments`
    );
    if (!commentsRes.ok) throw new Error("Failed to fetch comments");
    const comments = await commentsRes.json();
    console.log("Comments for first post:", comments);
  } catch (err) {
    console.error("Error fetching post or comments:", err);
  }
}
fetchFirstPostAndComments();

// C2.
const measure = async (label, fn) => {
  const t0 = performance.now();
  const result = await fn();
  const t1 = performance.now();
  console.log(`${label}: ${t1 - t0.toFixed(0)} ms`);
  return urls;
};

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

const sequentialFetch = async () => {
  const results = [];

  for (const url of urls) {
    const res = await fetch(url);
    results.push(await res.json());
  }
  return results;
};

const parallelFetch = async () => {
  const responses = await Promise.all(urls.map((url) => fetch(url)));
  return Promise.all(responses.map((res) => res.json()));
};

(async function runComparisons() {
  await measure("Sequential Fetch", sequentialFetch);
  await measure("Parallel Fetch", parallelFetch);
})();
