import React from 'react'
import { createContext, ReactNode, useContext, useState } from 'react'
import { api } from '../services/api'
import { CartDetails } from '../types/productTypes'

interface CartDetailsProviderProps {
  children: ReactNode
}

interface userPaymentInfo {
  flag: string
  name: string
  expirationDate: string
}

type CartDetailsProps = {
  userPaymentInfo: userPaymentInfo
  handleUserPaymentInfo: (userPaymentInfo: userPaymentInfo) => void
} & CartDetails

const cartDetailsPropsInitialValues = {
  id: '',
  items: [],
  subTotal: 0,
  shippingTotal: 0,
  discount: 0,
  total: 0,
  userPaymentInfo: {
    flag: '',
    name: '',
    expirationDate: ''
  },
  handleUserPaymentInfo: () => {}
}

const CartDetailsContext = createContext<CartDetailsProps>(
  cartDetailsPropsInitialValues
)

export function CartDetailsProvider({ children }: CartDetailsProviderProps) {
  const [cartDetails, setCartDetails] = useState<CartDetails>({} as CartDetails)
  const [userPaymentInfo, setUserPaymentInfo] = useState<userPaymentInfo>(
    {} as userPaymentInfo
  )
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

  const handleUserPaymentInfo = (userPaymentInfo: userPaymentInfo) => {
    setUserPaymentInfo(userPaymentInfo)
  }

  return (
    <CartDetailsContext.Provider
      value={{ ...cartDetails, userPaymentInfo, handleUserPaymentInfo }}
    >
      {children}
    </CartDetailsContext.Provider>
  )
}

export function useCartDetails(): CartDetails {
  const context = useContext(CartDetailsContext)

  return context
}
