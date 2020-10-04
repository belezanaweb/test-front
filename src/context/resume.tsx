import React, { createContext, useCallback, useState } from 'react';

import { Cart } from 'models/cart';

interface ResumeContextData {
  cartResume?: Cart;
  handleSetCartResume(items: Cart): void;
}

export const ResumeContext = createContext<ResumeContextData>(
  {} as ResumeContextData,
);

export const ResumeProvider: React.FC = ({ children }) => {
  const [cartResume, setCartResume] = useState<Cart>();

  const handleSetCartResume = useCallback((items: Cart) => {
    setCartResume(items);
  }, []);

  return (
    <ResumeContext.Provider value={{ cartResume, handleSetCartResume }}>
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeContext;
