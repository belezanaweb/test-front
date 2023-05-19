import { createContext, useState, useEffect, useContext, PropsWithChildren } from 'react';
import { CheckoutContextProps, CheckoutProviderProps } from './Checkout.types';

export const CheckoutContext = createContext<CheckoutContextProps>({} as CheckoutContextProps);

export const CheckoutProvider = ({
  children,
}: PropsWithChildren<CheckoutProviderProps>) => {
  const [checkout, setCheckout] = useState<CheckoutContextProps['checkout']>();
  const [loadingCheckout, setLoadingCheckout] = useState(true);

  const fetchCheckout = async () => {
    setLoadingCheckout(true)
    try {
      const data = await fetch(
        'https://run.mocky.io/v3/d6e9a93f-9741-4494-b81e-637a8e9b8ddd'
      ).then((response) => response.json());
  
      setCheckout({ ...data, card: { number: '', holderName: '', expiry: '', cvv: '' }} as CheckoutContextProps['checkout']);
      setLoadingCheckout(false)
    } catch (error) {
      setLoadingCheckout(false)
    }
  };
  
  const updateCard:CheckoutContextProps['updateCard'] = (card) => {
    setCheckout(checkout => checkout ? { ...checkout, card } : checkout)
  }

  useEffect(() => {
    fetchCheckout()
  }, [])
  
  const value: CheckoutContextProps = {
    loadingCheckout,
    checkout,
    fetchCheckout,
    updateCard
  };

  return <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>;
};

export const useCheckout = () => useContext(CheckoutContext);