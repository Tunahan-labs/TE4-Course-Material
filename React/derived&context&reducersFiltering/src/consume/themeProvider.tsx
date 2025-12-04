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
      <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
        Current theme: {state.mode}
      </p>
      <button
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        style={{
          borderRadius: "100px",
          margin: "10px",
          padding: "10px",
          fontSize: "0.9rem",
          fontWeight: "bold",
          cursor: "pointer",
          backgroundColor: "#2b6ef6",
          border: "none",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default SettingsPage;
