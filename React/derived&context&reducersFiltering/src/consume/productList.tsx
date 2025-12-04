// productList.tsx
import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import type { Product } from "../reducer/cartReducer";

const ProductList: React.FC = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("ProductList must be used within CartProvider");

  const { products, dispatch } = context;

  return (
    <div>
      <h2>Products</h2>
      {products.map((p: Product) => (
        <div key={p.id}>
          {p.name} - ${p.price}
          <button
            onClick={() => dispatch({ type: "ADD_ITEM", payload: p })}
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
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
