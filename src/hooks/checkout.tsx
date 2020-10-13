import React, { createContext, useCallback, useContext, useState } from 'react';
import { Cart } from '../@types/cart';
import { Order, Payment } from '../@types/checkout';
import { obfuscateCreditCardNumbers } from '../utils/format';

interface CheckoutContextData {
  order: Order | undefined;
  finish(cart: Cart, payment: Payment): void;
  destroy(): void;
}

const CheckoutContext = createContext<CheckoutContextData>(
  {} as CheckoutContextData,
);

const CheckoutProvider: React.FC = ({ children }) => {
  const [order, setOrder] = useState<Order | undefined>(() => {
    const cachedOrder = localStorage.getItem('@test:checkout');

    if (cachedOrder) {
      return JSON.parse(cachedOrder);
    }

    return cachedOrder;
  });

  const finish = useCallback((cart: Cart, payment: Payment) => {
    const { numeroCartao } = payment;

    const formattedNumeroCartao = obfuscateCreditCardNumbers(numeroCartao);

    const orderData = {
      cart,
      payment: { ...payment, numeroCartao: formattedNumeroCartao },
    };

    localStorage.setItem('@test:checkout', JSON.stringify(orderData));

    setOrder(orderData);
  }, []);

  const destroy = useCallback(() => {
    localStorage.removeItem('@test:checkout');
    setOrder(undefined);
  }, []);

  const checkoutData: CheckoutContextData = {
    order,
    finish,
    destroy,
  };

  return (
    <CheckoutContext.Provider value={checkoutData}>
      {children}
    </CheckoutContext.Provider>
  );
};

function useCheckout(): CheckoutContextData {
  const context = useContext(CheckoutContext);

  if (!context) {
    throw new Error('useCheckout must be used withion an CheckoutProvider');
  }

  return context;
}

export { CheckoutProvider, useCheckout };
