import ReactDOM from "react-dom/client";
import { CartProvider } from "./context/cartContext";
import { ThemeProvider } from "../src/context/themeContext";
import App from "./App";
import {} from "./App.css";

const cartRoot = ReactDOM.createRoot(
  document.getElementById("cart-root") as HTMLElement
);
cartRoot.render(
  <ThemeProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ThemeProvider>
);
