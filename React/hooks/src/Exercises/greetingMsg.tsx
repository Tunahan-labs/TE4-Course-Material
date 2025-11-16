import { useState } from "react";

export function Greeting() {
  const [name, setName] = useState<string>("Guest");

  const handleChange = () => {
    setName((prev) => (prev === "Guest" ? "Tunahan" : "Guest"));
  };

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={handleChange}>Change Name</button>
    </div>
  );
}
