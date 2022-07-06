import React, { createContext, Dispatch, ReactNode, useState } from 'react'
import { FormData } from '../components/molecules'

interface PaymentFormProviderProps {
  children: ReactNode
}

interface PaymentFormContextProps {
  formValues: FormData
  setFormValues: Dispatch<React.SetStateAction<FormData>>
}

export const PaymentFormContext = createContext<PaymentFormContextProps>(
  {} as PaymentFormContextProps
)

export const PaymentFormProvider = ({ children }: PaymentFormProviderProps) => {
  const [formValues, setFormValues] = useState<FormData>({} as FormData)

  return (
    <PaymentFormContext.Provider value={{ formValues, setFormValues }}>
      {children}
    </PaymentFormContext.Provider>
  )
}
