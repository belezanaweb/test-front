import React, { createContext, useState, useEffect } from 'react'
import { getCartProducts } from '../../api/cartAPI'

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
  const [cartProductsData, setCartProductsData] = useState({})

  const getCartProductsData = async () => {
    const cartData = await getCartProducts()
    setCartProductsData(cartData)
  }

  useEffect(() => {
    getCartProductsData()
  }, [])

  return (
    <CartContext.Provider value={{ cartProductsData, setCartProductsData }}>
      {children}
    </CartContext.Provider>
  )
}
