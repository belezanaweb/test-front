import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { api } from '../services/api';
import { Cart } from '../models/Cart';

export type CartContextProps = {
  cart?: Cart;
};

export type CartProviderProps = {
  children: ReactNode;
};

const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Cart>();

  useEffect(() => {
    api
      .getCurrentCart()
      .then(cart => setCart(cart))
      .catch(() => setCart(undefined));
  }, []);

  const value = useMemo(() => ({ cart }), [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCartProvider() {
  const context = useContext(CartContext);

  if (Object.keys(context).length === 0) {
    throw new Error('useCartProvider must be used within an CartProvider');
  }

  return context;
}
