import React from 'react'
import { createContext, ReactNode, useContext, useState } from 'react'
import { api } from '../services/api'
import { CartDetails, Payment } from '../types/productTypes'

export interface CartDetailsProviderProps {
  children: ReactNode
}

// interface userPaymentInfo {
//   flag: string
//   name: string
//   expirationDate: string
// }

export type CartDetailsProps = {
  userPaymentInfo: Payment
  handleUserPaymentInfo: (userPaymentInfo: Payment) => void
  mounted: boolean
} & CartDetails

export const cartDetailsPropsInitialValues = {
  id: '',
  items: [],
  subTotal: 0,
  shippingTotal: 0,
  discount: 0,
  total: 0,
  userPaymentInfo: {
    creditCard: '',
    nameInCard: '',
    expirationDate: '',
    cvv: ''
  },
  mounted: false,
  handleUserPaymentInfo: () => {}
}

export const CartDetailsContext = createContext<CartDetailsProps>(
  cartDetailsPropsInitialValues
)

export function CartDetailsProvider({ children }: CartDetailsProviderProps) {
  const [cartDetails, setCartDetails] = useState<CartDetails>({} as CartDetails)
  const [userPaymentInfo, setUserPaymentInfo] = useState<Payment>({} as Payment)
  const [mounted, setMounted] = useState(false)

  const getCartDetails = async () => {
    try {
      api
        .get<CartDetails>('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
        .then((cart) => {
          setCartDetails(cart.data)
          setMounted(true)
        })
    } catch {
      console.log('CartDetail requisition failed')
    }
  }

  if (!mounted) {
    getCartDetails()
  }

  const handleUserPaymentInfo = (userPaymentInfo: Payment) => {
    setUserPaymentInfo(userPaymentInfo)
  }

  return (
    <CartDetailsContext.Provider
      value={{
        ...cartDetails,
        userPaymentInfo,
        handleUserPaymentInfo,
        mounted
      }}
    >
      {children}
    </CartDetailsContext.Provider>
  )
}

export function useCartDetails(): CartDetailsProps {
  const context = useContext(CartDetailsContext)

  return context
}
