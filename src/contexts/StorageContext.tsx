import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getFromLocalStorage } from '../helpers/local-storage';
import { Cart } from '../interfaces/Cart';
import { BELEZA_NA_WEB_CART } from '../constants/local-storage';
import { cartRequest, cartSuccess } from '../store/modules/cart/actions';

interface StorageContextData {
  cartItems: Cart;
}

interface StorageProviderProps {
  children: ReactNode;
  cartItems: Cart;
}

export const StorageContext = createContext({} as StorageContextData);

export function StorageProvider({ children, ...props }: StorageProviderProps) {
  const { cart } = useSelector((state: RootStateOrAny) => state.cart);
  const [cartItems, setCartItems] = useState<Cart>(props.cartItems);

  const dispatch = useDispatch();

  useEffect(() => {
    const cartFromStorage = getFromLocalStorage(BELEZA_NA_WEB_CART);

    if (cartFromStorage) {
      setCartItems(cartFromStorage);
      dispatch(cartSuccess(cartFromStorage));
    } else {
      dispatch(cartRequest());
    }
  }, []);

  useEffect(() => {
    if (cart?.items?.length > 0) setCartItems(cart);
  }, [cart?.items]);

  return <StorageContext.Provider value={{ cartItems }}>{children}</StorageContext.Provider>;
}
