import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/themes/default';
import { store } from '../store';

import { StorageProvider } from '../contexts/StorageContext';
import { CartProvider } from '../hooks/useCart';

const AppProvider = ({ children, ...props }: any) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <StorageProvider cartItems={props.cartItems} creditCardInfo={props.creditCardInfo}>
        <CartProvider>{children}</CartProvider>
      </StorageProvider>
    </ThemeProvider>
  </Provider>
);

export default AppProvider;
