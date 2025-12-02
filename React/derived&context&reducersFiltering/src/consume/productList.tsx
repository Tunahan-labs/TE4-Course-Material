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
        <div key={p.id} style={{ marginBottom: "10px" }}>
          {p.name} - ${p.price}
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => dispatch({ type: "ADD_ITEM", payload: p })}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
