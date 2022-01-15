import React, { createContext, useState } from 'react'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    discount: 0,
    items: [],
    shippingTotal: 0,
    subTotal: 0,
    total: 0,
    creditCard: {
      number: '',
      name: '',
      cvv: '',
      date: ''
    }
  })

  return <DataContext.Provider value={[data, setData]}>{children}</DataContext.Provider>
}
