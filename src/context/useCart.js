import React, { createContext, useContext, useState } from 'react'
import { getCart } from '../services/cart'

//Creates a Context object. rendering a component
// that exists in that context and reads
// the current value of the closest Provider.
const CartContext = createContext({
  data: {},
  getData: () => {},
  savePaymentData: () => {},
  paymentData: {}
})

// Each object of the context (context) comes with a Provider
// that allows changing the states of the components
// as they are called in each screen or component.
export function CartProvider({ children }) {
  const [data, setData] = useState(() => {
    const storage = localStorage.getItem('@BelezaWeb')

    if (storage) {
      return JSON.parse(storage)
    }

    return []
  })

  const [paymentData, setPaymentData] = useState('')

  //takes endpoint data and returns as called.
  const getData = () => {
    getCart().then((response) => {
      setData(response)

      localStorage.setItem('@BelezaWeb', JSON.stringify(response))
    })
  }

  //saves the data that was called in the callback above
  const savePaymentData = (name, expirationDate, creditCard) => {
    setPaymentData({
      creditCard,
      expirationDate,
      name
    })
  }

  //returns the provider.
  return (
    <CartContext.Provider value={{ data, getData, savePaymentData, paymentData }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  return context
}
