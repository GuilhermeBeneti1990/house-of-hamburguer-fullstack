import { createContext, useState, type ReactNode } from "react";
import type { ICart, ICartContext } from "../types/Cart";

export const CartContext = createContext<ICartContext>({
  cartItems: [],
  setCartItems: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<ICart[]>([]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
