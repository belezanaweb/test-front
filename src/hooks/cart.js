import React, { createContext, useContext, useState, useEffect } from 'react'
import requestAPI from '../utils/requestAPI'

const CartContext = createContext({})

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [totalData, setTotalData] = useState({
    subTotal: 0,
    shippingTotal: 0,
    discount: 0,
    total: 0
  })

  useEffect(() => {
    requestAPI({ url: 'http://www.mocky.io/v2/5b15c4923100004a006f3c07' }).then((resp) => {
      console.log(resp.data)
      setItems(resp.data.items)
      setTotalData({
        subTotal: resp.data.subTotal,
        shippingTotal: resp.data.shippingTotal,
        discount: resp.data.discount,
        total: resp.data.total
      })
    })
  }, [])

  return <CartContext.Provider value={{ items, totalData }}>{children}</CartContext.Provider>
}

function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be use within a CartProvider')
  }

  return context
}

export { CartProvider, useCart }
