import { ReactNode, createContext, useContext, useState } from 'react'

import { PaymentFormData  } from '../pages/Payment';
import { useNavigate } from 'react-router-dom';

interface PaymentContextData {
  payment: PaymentFormData;
  setPayment: (payment: PaymentFormData) => void;
  resetPayment: () => void;
}

 export const PaymentContext = createContext<PaymentContextData>({} as PaymentContextData)

interface PaymentContextProviderProps {
  children: ReactNode;
}

export function PaymentContextProvider({ children }: PaymentContextProviderProps) {
  const navigate = useNavigate()
  const [payment, setPayment] = useState<PaymentFormData>({
    credit_card_number:'',
    name:'',
    cvv:'',
    valid_date:'',
  })


  function resetPayment() {
    setPayment({
      credit_card_number:'',
      name:'',
      cvv:'',
      valid_date:'',
    })
    navigate('/bag')
  }

console.log('setPayment', payment)
 

  return <PaymentContext.Provider value={{ payment, setPayment, resetPayment}}>{children}</PaymentContext.Provider>
}

