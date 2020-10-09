import React from 'react';

import { CartProvider } from './cart';

const AppProvider: React.FC = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default AppProvider;
