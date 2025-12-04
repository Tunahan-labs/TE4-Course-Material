// App.tsx
import React, { useContext } from "react";
import ProductList from "./consume/productList";
import { CartContext } from "./context/cartContext";

import { ThemeContext } from "./context/themeContext";
import SettingsPage from "./consume/themeProvider";

const App: React.FC = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("App must be used within CartProvider");

  const { cart } = context;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const { state } = useContext(ThemeContext)!;

  const appStyle: React.CSSProperties = {
    backgroundColor: state.mode === "light" ? "#fff" : "#000000ff",
    color: state.mode === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "100px",
    width: "90%",
    marginLeft: "-10px",
    marginTop: "-10px",
    marginBottom: "-10px",
  };

  return (
    <div style={appStyle} id="app">
      <h2>Theme Toggle Settings:</h2>
      <SettingsPage />
      <h1>Shopping Cart Example</h1>
      <ProductList />
      <h2>Cart Summary</h2>
      <p>Total items: {totalItems}</p>
      <p>Total price: ${totalPrice}</p>
      <h3>Cart Details</h3>
      {cart.map((item) => (
        <div key={item.id}>
          {item.name} x {item.quantity} = ${item.price * item.quantity}
        </div>
      ))}
    </div>
  );
};

export default App;
