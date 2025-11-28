import React, { useState } from "react";

type Item = { id: string; text: string };

export default function InteractiveList() {
  const [items, setItems] = useState<Item[]>([]);
  const [input, setInput] = useState("");

  const add = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setItems((prev) => [
      ...prev,
      {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2),
        text,
      },
    ]);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={add}>
        <label htmlFor="new-item">New item</label>
        <input
          id="new-item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type new item here..."
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {items.map((it) => (
          <li key={it.id}>
            {it.text}{" "}
            <button
              onClick={() =>
                setItems((prev) => prev.filter((i) => i.id !== it.id))
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
