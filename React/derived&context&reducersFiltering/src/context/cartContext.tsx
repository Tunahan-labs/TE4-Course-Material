// cartContext.tsx
import React, { createContext, useReducer } from "react";
import type { CartItem, CartAction, Product } from "../reducer/cartReducer";
import { cartReducer } from "../reducer/cartReducer";
export const products: Product[] = [
  { id: 1, name: "Wireless Headphones", price: 799 },
  { id: 2, name: "Mechanical Keyboard", price: 1299 },
  { id: 3, name: "USB-C Charging Cable", price: 149 },
  { id: 4, name: "HD Web Camera", price: 599 },
  { id: 5, name: "Portable Speaker", price: 999 },
];

interface CartContextType {
  cart: CartItem[];
  dispatch: React.Dispatch<CartAction>;
  products: Product[];
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch, products }}>
      {children}
    </CartContext.Provider>
  );
};
