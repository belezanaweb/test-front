import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from '../styles/themes/default';

import { CartProvider } from '../hooks/useCart';
import { ToastProvider } from '../hooks/useToast';

const AppProvider = ({ children }: any) => (
  <ThemeProvider theme={theme}>
    <ToastProvider>
      <CartProvider>{children}</CartProvider>
    </ToastProvider>
  </ThemeProvider>
);

export default AppProvider;
