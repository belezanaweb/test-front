import React, { createContext, useContext, useState } from 'react'
import { getCheckout } from '../services/checkout'

const CheckoutContext = createContext({
  data: {},
  getData: () => {},
  savePaymentData: () => {},
  paymentData: {}
})

export function CheckoutProvider({ children }) {
  const [data, setData] = useState(() => {
    const storage = localStorage.getItem('FrontTestCheckout')

    if (storage) {
      return JSON.parse(storage)
    }

    return []
  })

  const [paymentData, setPaymentData] = useState('')

  const getData = () => {
    getCheckout().then((response) => {
      setData(response)

      localStorage.setItem('FrontTestCheckout', JSON.stringify(response))
    })
  }

  const savePaymentData = (name, expirationDate, creditCard) => {
    setPaymentData({
      creditCard,
      expirationDate,
      name
    })
  }

  return (
    <CheckoutContext.Provider value={{ data, getData, savePaymentData, paymentData }}>
      {children}
    </CheckoutContext.Provider>
  )
}

export function useCheckout() {
  const context = useContext(CheckoutContext)

  return context
}
