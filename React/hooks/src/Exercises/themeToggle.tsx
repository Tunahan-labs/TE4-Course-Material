import { useState } from "react";

export const ThemeToggle = () => {
  const [Dark, setDark] = useState<boolean>(false);
  const toggleTheme = () => {
    setDark(!Dark);
    if (!Dark) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
