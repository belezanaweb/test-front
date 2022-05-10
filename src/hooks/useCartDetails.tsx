import React from 'react'
import { createContext, ReactNode, useContext, useState } from 'react'
import { api } from '../services/api'
import { CartDetails } from '../types'

interface CartDetailsProviderProps {
  children: ReactNode
}

const cartDetailsInitialValues = {
  id: '',
  items: [],
  subTotal: 0,
  shippingTotal: 0,
  discount: 0,
  total: 0
}

const CartDetailsContext = createContext<CartDetails>(cartDetailsInitialValues)

export function CartDetailsProvider({ children }: CartDetailsProviderProps) {
  const [cartDetails, setCartDetails] = useState<CartDetails>(
    cartDetailsInitialValues
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

  return (
    <CartDetailsContext.Provider value={cartDetails}>
      {children}
    </CartDetailsContext.Provider>
  )
}

export function useCartDetails(): CartDetails {
  const context = useContext(CartDetailsContext)

  return context
}
