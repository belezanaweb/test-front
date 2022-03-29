import React, { useState, useEffect } from 'react'
import CartContext from './CartContext'

function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [total, setTotal] = useState([])
  const [subTotal, setsubTotal] = useState([])
  const [shippingTotal, setShipping] = useState([])
  const [discount, setDiscount] = useState([])
  const [paymentData, setPaymentData] = useState({})

  //GET in the mocky.io API --- Params = product name, image, price, discounts and shipping price
  useEffect(() => {
    fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then((response) => response.json())
      .then((data) => {
        setItems(data.items)
        setTotal(data.total)
        setsubTotal(data.subTotal)
        setShipping(data.shippingTotal)
        setDiscount(data.discount)
      })
  }, [])

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        total,
        setTotal,
        subTotal,
        setsubTotal,
        shippingTotal,
        setShipping,
        discount,
        setDiscount,
        paymentData,
        setPaymentData
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
