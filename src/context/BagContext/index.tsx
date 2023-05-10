import React, { useReducer, useCallback } from 'react';
import BagContext from './context';
import { reducer } from './reducer';
import { actionSetResponseBagData, actionSetPaymentData } from './actions';
import { ResponseBag } from '../../@types/responses/bag';
import { Payment } from '../../@types/form/payment';

const BagContextProvider: React.FC<React.PropsWithChildren> = ({ children }): React.ReactElement => {
  const [state, dispatch] = useReducer(reducer, { responseBag: {}, payment: {}});

  const setResponseBagData = useCallback((data: ResponseBag) => dispatch(actionSetResponseBagData(data)), []);
  const setPaymentData = useCallback((data: Payment) => dispatch(actionSetPaymentData(data)), []);

  return (
    <BagContext.Provider value={{
      state,
      actions: {
        setResponseBagData,
        setPaymentData,
      },
    }}>
      {children}
    </BagContext.Provider>
  );
};

export default BagContextProvider;
