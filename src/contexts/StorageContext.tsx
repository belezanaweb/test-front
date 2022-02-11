import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getFromLocalStorage } from '../helpers/local-storage';
import { Cart } from '../interfaces/Cart';
import { BELEZA_NA_WEB_CART, BELEZA_NA_WEB_CREDIT_CARD } from '../constants/local-storage';
import { cartRequest, cartSuccess, setCreditCardInfo } from '../store/modules/cart/actions';

interface StorageContextData {
  cartItems: Cart;
  creditCardInfo: any;
}

interface StorageProviderProps {
  children: ReactNode;
  cartItems: Cart;
  creditCardInfo: any;
}

export const StorageContext = createContext({} as StorageContextData);

export function StorageProvider({ children, ...props }: StorageProviderProps) {
  const { cart, creditCard } = useSelector((state: RootStateOrAny) => state.cart);

  const [cartItems, setCartItems] = useState<Cart>(props.cartItems);
  const [creditCardInfo, setCreditCard] = useState<Cart>(props.cartItems);

  const dispatch = useDispatch();

  useEffect(() => {
    const cartFromStorage = getFromLocalStorage(BELEZA_NA_WEB_CART);
    const creditCardFromStorage = getFromLocalStorage(BELEZA_NA_WEB_CREDIT_CARD);

    if (cartFromStorage) {
      setCartItems(cartFromStorage);
      dispatch(cartSuccess(cartFromStorage));
    } else {
      dispatch(cartRequest());
    }

    if (creditCardFromStorage) {
      setCreditCard(creditCardFromStorage);
      dispatch(setCreditCardInfo(creditCardFromStorage));
    }
  }, []);

  useEffect(() => {
    if (cart?.items?.length > 0) setCartItems(cart);
  }, [cart?.items]);

  useEffect(() => {
    if (creditCard) setCreditCard(creditCard);
  }, [creditCard]);

  return (
    <StorageContext.Provider value={{ cartItems, creditCardInfo }}>
      {children}
    </StorageContext.Provider>
  );
}
