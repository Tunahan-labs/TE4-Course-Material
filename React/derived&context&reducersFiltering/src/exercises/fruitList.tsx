import { useState, type JSX } from "react";

export default function FruitList(): JSX.Element {
  const [searchText, setSearchText] = useState("");

  const fruits = ["Apple", "Banana", "Orange", "Mango"];

  const filtered = fruits.filter((f) =>
    f.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search fruits..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <ul>
        {filtered.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
