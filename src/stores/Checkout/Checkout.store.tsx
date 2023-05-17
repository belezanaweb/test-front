import { createContext, useState, useEffect, useContext, PropsWithChildren } from 'react';

import { CheckoutContextProps, CheckoutProviderProps } from './Checkout.types';

export const CheckoutContext = createContext<CheckoutContextProps>({} as CheckoutContextProps);

export const CheckoutProvider = ({
  children,
}: PropsWithChildren<CheckoutProviderProps>) => {
  const [checkout, setCheckout] = useState<CheckoutContextProps['checkout']>();

  const fetchCheckout = async () => {
    const data = await fetch(
      'https://run.mocky.io/v3/d6e9a93f-9741-4494-b81e-637a8e9b8ddd'
    ).then((response) => response.json());

    setCheckout(data as CheckoutContextProps['checkout']);
  };

  useEffect(() => {
    fetchCheckout()
  }, [])

  const value: CheckoutContextProps = {
    checkout,
    fetchCheckout,
  };

  return <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>;
};

export const useCheckout = () => useContext(CheckoutContext);