import { createContext } from "react";

export interface Product {
  sku: string;
  title: string;
  price: number | string;
  image: {
    medium: string;
    thumbnail: string;
  };
}

export interface Cart {
  discount?: number;
  items: Product[];
  shippingTotal: number;
  subTotal: number;
  total: number;
}

export interface CartContextData {
  cart: Cart | null;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);
