import React, { createContext, useContext, useState } from 'react'
import { getCheckout } from '../services/checkout'

const CheckoutContext = createContext({
  data: {},
  getCheckout: () => {}
})

export function CheckoutProvider({ children }) {
  const [data, setData] = useState(() => {
    const storage = localStorage.getItem('FrontTestCheckout')

    if (storage) {
      return JSON.parse(storage)
    }

    return []
  })

  const getData = () => {
    getCheckout().then((response) => {
      setData(response)

      localStorage.setItem('FrontTestCheckout', JSON.stringify(response))
    })
  }

  return <CheckoutContext.Provider value={{ data, getData }}>{children}</CheckoutContext.Provider>
}

export function useCheckout() {
  const context = useContext(CheckoutContext)

  return context
}
