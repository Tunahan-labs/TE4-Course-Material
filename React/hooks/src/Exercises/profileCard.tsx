import { useState } from "react";

type User = {
  name: string;
  age: number;
};

export function ProfileCard() {
  const [user, setUser] = useState<User>({ name: "John Doe", age: 30 });

  const changeName = () => {
    setUser((prev) => ({
      ...prev,
      name: prev.name === "John Doe" ? "Jane Smith" : "John Doe",
    }));
  };

  const increaseAge = () => {
    setUser((prev) => ({
      ...prev,
      age: prev.age + 1,
    }));
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <button onClick={changeName}>Change Name</button>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}
