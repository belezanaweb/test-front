import React, { useState, createContext } from 'react'

export const CartContext = createContext()
CartContext.displayName = 'CartContext'

export const CartStore = (props) => {
  const [data, setData] = useState({})

  return (
    <CartContext.Provider
      value={{
        state: data,
        dispatch: setData
      }}
      {...props}
    />
  )
}
