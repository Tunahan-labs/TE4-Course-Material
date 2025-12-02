// App.tsx
import React, { useContext } from "react";
import { ThemeContext } from "../src/context/themeContext";
import SettingsPage from "../src/consume/themeProvider";

const AppTheme: React.FC = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("App must be used within ThemeProvider");

  const { state } = context;

  const appStyle: React.CSSProperties = {
    backgroundColor: state.mode === "light" ? "#fff" : "#000000ff",
    color: state.mode === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "100px",
  };

  return (
    <div style={appStyle}>
      <h1>Theme Context Example</h1>
      <SettingsPage />
    </div>
  );
};

export default AppTheme;
