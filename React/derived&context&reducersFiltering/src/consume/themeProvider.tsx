// SettingsPage.tsx
import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const SettingsPage: React.FC = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("SettingsPage must be used within ThemeProvider");

  const { state, dispatch } = context;

  return (
    <div>
      <h2>Settings</h2>
      <p>Current theme: {state.mode}</p>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Toggle Theme
      </button>
    </div>
  );
};

export default SettingsPage;
