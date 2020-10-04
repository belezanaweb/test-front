import React, { createContext, useCallback, useState } from 'react';

import { Cart } from 'models/cart';

interface ResumeContextData {
  cartItems?: object;
  handleSetCartItems(items: Cart): void;
}

export const ResumeContext = createContext<ResumeContextData>(
  {} as ResumeContextData,
);

export const ResumeProvider: React.FC = ({ children }) => {
  const [cartItems, setCartItems] = useState<Cart>();

  const handleSetCartItems = useCallback((items: Cart) => {
    setCartItems(items);
  }, []);

  return (
    <ResumeContext.Provider value={{ cartItems, handleSetCartItems }}>
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeContext;
