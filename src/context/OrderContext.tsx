import React, { useState, createContext } from 'react'

const OrderContext = createContext([{}, () => {}])

const OrderProvider: React.FC = ({ children }) => {
  const [state, setState] = useState()
  return <OrderContext.Provider value={[state, setState]}>{children}</OrderContext.Provider>
}

export { OrderProvider, OrderContext }
