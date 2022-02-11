import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/themes/default';
import { store } from '../store';
import { CartProvider } from '../hooks/useCart';

const AppProvider = ({ children, ...props }: any) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CartProvider>{children}</CartProvider>
    </ThemeProvider>
  </Provider>
);

export default AppProvider;
