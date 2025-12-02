import ReactDOM from "react-dom/client";
import App from "./AppCart";
import { CartProvider } from "./context/cartContext";

import AppTheme from "./AppTheme";
import { ThemeProvider } from "../src/context/themeContext";

import FruitList from "./exercises/fruitList";
import CategoryFilter from "./exercises/categoryFilter";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <FruitList />
    <CategoryFilter />
  </>
);

const cartRoot = ReactDOM.createRoot(
  document.getElementById("cart-root") as HTMLElement
);
cartRoot.render(
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
