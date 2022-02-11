import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from '../styles/themes/default';

import { CartProvider } from '../hooks/useCart';

const AppProvider = ({ children }: any) => (
  <ThemeProvider theme={theme}>
    <CartProvider>{children}</CartProvider>
  </ThemeProvider>
);

export default AppProvider;
