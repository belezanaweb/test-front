import React, { createContext, useCallback, useContext, useState } from 'react';
import { Cart } from '../@types/cart';
import { CartMapper } from '../mappers';
import api from '../services/api';

interface CartContextData {
  cart: Cart | undefined;
  load(): void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<Cart>(() => {
    const cartCached = localStorage.getItem('@test:cart');

    if (cartCached) {
      return JSON.parse(cartCached);
    }

    return null;
  });

  const load = useCallback(() => {
    api
      .get('/5b15c4923100004a006f3c07')
      .then(response => {
        const cartData = CartMapper.format(response.data);

        localStorage.setItem('@test:cart', JSON.stringify(cartData));

        setCart(cartData);
      })
      .catch(error => {
        console.log(`Error: `, error);
        alert('Erro ao carregar os dados da sacola. Tente novamente!');
      });
  }, []);

  const cartData: CartContextData = {
    cart,
    load,
  };

  return (
    <CartContext.Provider value={cartData}>{children}</CartContext.Provider>
  );
};

function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used withion an CartProvider');
  }

  return context;
}

export { CartProvider, useCart };
