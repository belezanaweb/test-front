import { ReactNode, createContext, useContext, useState } from 'react'
import { CreatePaymentFormData } from '../pages/Payment';

interface PaymentContextData {
  isPaid: boolean;
  payment: CreatePaymentFormData;
  createPayment: (payment: CreatePaymentFormData) => void;
}

 const PaymentContext = createContext<PaymentContextData>({} as PaymentContextData)

interface PaymentContextProviderProps {
  children: ReactNode;
}

export function PaymentContextProvider({ children }: PaymentContextProviderProps) {

  const [payment, setPayment] = useState<CreatePaymentFormData>({
    cardNumber:'',
    cardExpirationDate:'',
    cardCvv:'',
    cardHolderName:'',
  })

  const [isPaid, setIsPaid]= useState<boolean>(false)

  function createPayment(payment: CreatePaymentFormData) {
    setPayment({...payment})
    setIsPaid(true)
  }

  return <PaymentContext.Provider value={{isPaid, payment, createPayment}}>{children}</PaymentContext.Provider>
}

export function usePayment() {
  const context = useContext(PaymentContext)

  return context;
}
