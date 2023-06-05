import { createContext, useContext } from 'react';

const CheckoutContext = createContext(null);

export default CheckoutContext;

export const useCheckoutContext = () => {
  const context = useContext(CheckoutContext);
  return context;
};
