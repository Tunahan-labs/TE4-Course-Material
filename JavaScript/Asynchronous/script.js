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
async function fetchUsersAndPostsRetry(maxAttempts = 3, delayMs = 500) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const [usersRes, postsRes] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users"),
        fetch("https://jsonplaceholder.typicode.com/posts"),
      ]);
      if (!usersRes.ok || !postsRes.ok) throw new Error("Bad response");
      const [users, posts] = await Promise.all([
        usersRes.json(),
        postsRes.json(),
      ]);
      console.log("Success on attempt", attempt);
      return { users, posts };
    } catch (err) {
      if (attempt === maxAttempts) {
        console.error("Failed after retries:", err);
        return null;
      }
      await wait(delayMs);
    }
  }
}

fetchUsersAndPostsRetry();

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
async function compareParallelVsSequential() {
  const base = "https://jsonplaceholder.typicode.com";
  const urls = [`${base}/albums`, `${base}/photos`, `${base}/todos/2`];

  console.time("sequential");
  for (const url of urls) {
    const res = await fetch(url);
    await res.json();
  }
  console.timeEnd("sequential");

  console.time("parallel");
  await Promise.all(urls.map((url) => fetch(url).then((r) => r.json())));
  console.timeEnd("parallel");

  console.time("promiseAllSettled");
  await Promise.allSettled(urls.map((url) => fetch(url).then((r) => r.json())));
  console.timeEnd("promiseAllSettled");
}

compareParallelVsSequential();
