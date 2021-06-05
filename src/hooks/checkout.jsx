import React, { createContext, useState, useContext, useEffect } from 'react'
import api from '../services/api'

const CheckoutContext = createContext({})

const CheckoutProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [cartSummary, setCartSummary] = useState({})

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        setIsLoading(true)
        const {
          data: { items, subTotal, shippingTotal, discount, total }
        } = await api.get('/5b15c4923100004a006f3c07')

        setCartItems(items)
        setCartSummary({ subTotal, shippingTotal, discount, total })
      } finally {
        setIsLoading(false)
      }
    }

    fetchApiData()
  }, [])

  return (
    <CheckoutContext.Provider value={{ cartItems, cartSummary, isLoading }}>
      {children}
    </CheckoutContext.Provider>
  )
}

function useCheckout() {
  const context = useContext(CheckoutContext)

  if (!context) {
    throw new Error('useCheckout must be used within an CheckoutProvider')
  }

  return context
}

export { CheckoutProvider, useCheckout }
