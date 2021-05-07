import React, { ReactNode, useEffect, useState } from "react";
import { cartMapper } from "services/cartMapper";
import { Cart, CartContext } from "../contexts/Cart";
import { api } from "../services/api";

interface CartProviderProps {
  children: ReactNode;
}

interface imageObject {
  extraLarge: string;
  featured: boolean;
  large: string;
  medium: string;
  small: string;
  thumbnail: string;
  valid: true;
}

interface Product {
  product: {
    imageObjects: imageObject[];
    name: string;
    priceSpecification: {
      discount: number;
      maxPrice: number;
      originalPrice: number;
      percent: number;
      price: number;
      sku: string;
    };
    sku: string;
  };
  quantity: number;
}

export interface CartResponseProps {
  id: string;
  items: Product[];
  discount: number;
  shippingTotal: number;
  subTotal: number;
  total: number;
}

export const CartProvider = ({ children }: CartProviderProps): JSX.Element => {
  const [cart, setCart] = useState<Cart | null>(null);

  async function getCart() {
    try {
      const response = await api.get<CartResponseProps>(
        "/5b15c4923100004a006f3c07"
      );

      setCart(cartMapper(response.data));
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
};
