import { useContext } from "react";
import { CartContext, CartContextData } from "../contexts/Cart";

export const useCart = (): CartContextData => {
  return useContext(CartContext);
};
