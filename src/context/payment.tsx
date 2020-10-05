import React, { createContext, useCallback, useState } from 'react';

import { PaymentInfo } from 'models/payment';

interface PaymentContextData {
  paymentInfo?: PaymentInfo;
  handleSetPaymentInfo(info: PaymentInfo): void;
}

export const PaymentContext = createContext<PaymentContextData>(
  {} as PaymentContextData,
);

export const PaymentProvider: React.FC = ({ children }) => {
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>();

  const handleSetPaymentInfo = useCallback((info: PaymentInfo) => {
    setPaymentInfo(info);
  }, []);

  return (
    <PaymentContext.Provider value={{ paymentInfo, handleSetPaymentInfo }}>
      {children}
    </PaymentContext.Provider>
  );
};

export default PaymentContext;
