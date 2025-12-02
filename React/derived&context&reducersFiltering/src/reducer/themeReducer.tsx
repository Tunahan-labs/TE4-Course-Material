// themeReducer.tsx
export type ThemeState = {
  mode: "light" | "dark";
};

export type ThemeAction = { type: "TOGGLE_THEME" };

export function themeReducer(
  state: ThemeState,
  action: ThemeAction
): ThemeState {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { mode: state.mode === "light" ? "dark" : "light" };
    default:
      return state;
  }
}
