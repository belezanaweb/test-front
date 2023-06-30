import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { api } from '../services/api';
import { Cart } from '../models/Cart';
import { CreditCard } from '../models/CreditCard';

export type CartContextProps = {
  cart?: Cart;
  creditCard?: CreditCard;
  setCreditCard: (creditCard: CreditCard) => void;
};

export type CartProviderProps = {
  children: ReactNode;
};

const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Cart>();
  const [creditCard, setCreditCard] = useState<CreditCard>();

  useEffect(() => {
    api
      .getCurrentCart()
      .then(cart => setCart(cart))
      .catch(() => setCart(undefined));
  }, []);

  const onSetCreditCard = useCallback((creditCard: CreditCard) => {
    setCreditCard(creditCard);
  }, []);

  const value = useMemo(
    () => ({ cart, creditCard, setCreditCard: onSetCreditCard }),
    [cart, creditCard, onSetCreditCard],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCartProvider() {
  const context = useContext(CartContext);

  if (Object.keys(context).length === 0) {
    throw new Error('useCartProvider must be used within an CartProvider');
  }

  return context;
}
