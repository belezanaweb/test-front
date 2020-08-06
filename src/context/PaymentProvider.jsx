import React, { createContext, useContext, useState } from 'react'

const PaymentContext = createContext();

export default function PaymentProvider({ children }) {
  const [paymentData, setPaymentData] = useState({ empty: true });

  return (
    <PaymentContext.Provider value={{
      paymentData,
      setPaymentData
    }}>
      { children }
    </PaymentContext.Provider>
  )
}


export const usePayment = () => {
  const paymentCtx = useContext(PaymentContext);
  
  const { paymentData, setPaymentData } = paymentCtx;

  return { paymentData, setPaymentData }
}