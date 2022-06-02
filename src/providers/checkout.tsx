import React, { useContext, createContext, useState } from 'react'
import { CheckoutType, Product } from '../types/CheckoutType'

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
  const [productData, setProductData] = useState<Product>({
    id: '',
    items: [],
    discount: 0,
    shippingTotal: 5.3,
    subTotal: 624.8,
    total: 618.9
  })

  console.log(navigation)

  return (
    <CheckoutContext.Provider
      value={{
        navigation,
        setNavigation,
        productData,
        setProductData
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

export const useCheckout = () => useContext(CheckoutContext)
