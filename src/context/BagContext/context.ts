import { createContext } from 'react';
import { ContextState } from './types';

const BagContext = createContext<ContextState>({
  state: {
    responseBag: {},
    payment: {},
  },
  actions: {
    setResponseBagData: function (): void {},
    setPaymentData: function (): void {},
  },
});

export default BagContext;
