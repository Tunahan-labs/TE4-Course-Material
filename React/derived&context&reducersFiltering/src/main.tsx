import ReactDOM from "react-dom/client";
import App from "./AppCart";
import { CartProvider } from "./context/cartContext";

import AppTheme from "./AppTheme";
import { ThemeProvider } from "../src/context/themeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);

const themeRoot = ReactDOM.createRoot(
  document.getElementById("theme-root") as HTMLElement
);
themeRoot.render(
  <ThemeProvider>
    <AppTheme />
  </ThemeProvider>
);
