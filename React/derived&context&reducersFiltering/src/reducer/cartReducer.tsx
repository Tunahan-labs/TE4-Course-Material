// cartReducer.tsx
export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export type CartAction = { type: "ADD_ITEM"; payload: Product };

export function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "ADD_ITEM": {
      const product = action.payload;
      const existing = state.find((item) => item.id === product.id);

      if (existing) {
        return state.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...product, quantity: 1 }];
      }
    }
    default:
      return state;
  }
}
