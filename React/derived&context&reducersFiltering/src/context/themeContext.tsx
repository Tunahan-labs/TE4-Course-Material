// ThemeContext.tsx
import React, { createContext, useReducer, type ReactNode } from "react";
import {
  type ThemeAction,
  type ThemeState,
  themeReducer,
} from "../reducer/themeReducer";

interface ThemeContextType {
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(themeReducer, { mode: "light" });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
