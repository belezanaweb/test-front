import React from 'react';
import { CartProvider } from './cart';
import { CheckoutProvider } from './checkout';

const AppProvider: React.FC = ({ children }) => {
  return (
    <CartProvider>
      <CheckoutProvider>{children}</CheckoutProvider>
    </CartProvider>
  );
};

export default AppProvider;
