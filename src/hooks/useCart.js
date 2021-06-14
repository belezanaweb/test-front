import React, { createContext, useState, useContext, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import api from '../services/api'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
  const history = useHistory()
  const [paymentInfo, setPaymentInfo] = useState(null)
  const [cart, setCart] = useState(() => {
    const storagedCart = localStorage.getItem('@boticario:cart')
    return storagedCart ? JSON.parse(storagedCart) : null
  })

  useEffect(() => {
    if (cart) {
      return
    }

    api.get('5b15c4923100004a006f3c07').then(({ data }) => {
      const { items: productList, ...rest } = data

      setCart({ productList, ...rest })
      localStorage.setItem('@boticario:cart', JSON.stringify({ productList, ...rest }))
    })
  }, [cart])

  const handleSubmitCheckout = useCallback(
    ({ creditCardNumber, name, expirationDate }) => {
      const finalCreditCardNumbers = creditCardNumber.substring(creditCardNumber.length - 4)
      setPaymentInfo({ finalCreditCardNumbers, name, expirationDate })

      history.push('/confirmation')
    },
    [history]
  )

  return (
    <CartContext.Provider value={{ ...cart, paymentInfo, handleSubmitCheckout }}>
      {children}
    </CartContext.Provider>
  )
}

CartContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCartContext must be used within a CartContextProvider')
  }

  return context
}
