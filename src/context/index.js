import React from 'react'

export const DataContext = React.createContext()

export const DataProvider = ({ children }) => {
  const [products, setProducts] = React.useState({
    discount: null,
    items: [],
    shippingTotal: null,
    subTotal: null,
    total: null,
    creditCard: {
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: ''
    }
  })

  return <DataContext.Provider value={[products, setProducts]}>{children}</DataContext.Provider>
}
