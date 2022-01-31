import React, { createContext, useState } from 'react'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [produtos, setProduto] = useState({
    discount: 0,
    items: [],
    shippingTotal: 0,
    subTotal: 0,
    total: 0,
    creditCard: {
      number: '',
      name: '',
      expiration: '',
      cvc: ''
    }
  })

  return <DataContext.Provider value={[produtos, setProduto]}>{children}</DataContext.Provider>
}
