import React, { createContext, Dispatch, useState } from "react"
import { ProductCart } from "../interfaces/ProductCart.interface"

interface CartData {
  products: ProductCart | undefined;
  setProducts: Dispatch<React.SetStateAction<ProductCart | undefined>>;
}

interface CartContextProvider {
  children: React.ReactNode;
}

export const CartContext = createContext({ products: {} as ProductCart } as CartData);

export const CartContextProvider = ({ children }: CartContextProvider): JSX.Element => {
  const [products, setProducts] = useState<ProductCart>();

  return (
    <CartContext.Provider value={{ products, setProducts }}>
      {children}
    </CartContext.Provider>
  );
}