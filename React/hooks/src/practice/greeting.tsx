import React, { useState, useEffect, useRef } from "react";

const moodOptions = [
  { key: "happy", emoji: "😀", label: "Happy" },
  { key: "angry", emoji: "😤", label: "Angry" },
  { key: "tired", emoji: "😴", label: "Tired" },
  { key: "cool", emoji: "😎", label: "Cool" },
];

const defaultMood = moodOptions[0].emoji;

export const Greetings: React.FC = () => {
  const [name, setName] = useState("");
  const [mood, setMood] = useState<string>(defaultMood);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Update page title when name changes
  useEffect(() => {
    document.title = name ? `Greeting for ${name}` : "Personal Greeting Card";
  }, [name]);

  const handleClear = () => {
    setName("");
    setMood(defaultMood);
    inputRef.current?.focus();
  };

  return (
    <div
      style={{ fontFamily: "sans-serif", maxWidth: 480, margin: "1rem auto" }}
    >
      <h2>Personal Greeting Card</h2>

      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          aria-label="Name"
          style={{ flex: 1, padding: "8px 10px", fontSize: 16 }}
        />

        <select
          value={mood}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setMood(e.target.value)
          }
          aria-label="Mood"
          style={{ padding: "8px 10px", fontSize: 16 }}
        >
          {moodOptions.map((opt) => (
            <option key={opt.key} value={opt.emoji}>
              {opt.emoji} {opt.label}
            </option>
          ))}
        </select>

        <button
          onClick={handleClear}
          style={{ padding: "8px 12px", fontSize: 16 }}
        >
          Clear
        </button>
      </div>

      <div
        aria-live="polite"
        style={{
          border: "1px solid #ddd",
          borderRadius: 8,
          padding: 16,
          background: "#fafafa",
        }}
      >
        <div style={{ fontSize: 48 }}>{mood}</div>
        <div style={{ fontSize: 18, marginTop: 8 }}>
          Hello, <strong>{name || "Guest"}</strong>!
        </div>
        <div style={{ color: "#666", marginTop: 6 }}>
          A little preview of your card.
        </div>
      </div>
    </div>
  );
};
