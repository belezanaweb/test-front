import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Cart } from '../models/Cart';
import { CreditCard } from '../models/CreditCard';
import { api } from '../services/api';

export type CartContextProps = {
  cart?: Cart;
  creditCard?: CreditCard;
  setCreditCard: (creditCard: CreditCard) => void;
};

export type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext({} as CartContextProps);

export default function CartProvider({ children }: CartProviderProps) {
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
