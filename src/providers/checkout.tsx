import React, { useContext, createContext, useState } from 'react'
import { CheckoutType } from '../types/CheckoutType'

type Props = {
  children: JSX.Element
}

const CheckoutContext = createContext<CheckoutType>({} as CheckoutType)

export function CheckoutProvider({ children }: Props) {
  const [navigation, setNavigation] = useState([
    { id: 1, name: 'Sacola', active: true },
    { id: 2, name: 'Pagamento', active: false },
    { id: 3, name: 'Confirmação', active: false }
  ])

  console.log(navigation)

  return (
    <CheckoutContext.Provider
      value={{
        navigation,
        setNavigation
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

export const useCheckout = () => useContext(CheckoutContext)
