import React, { useState, useEffect } from 'react'
import CartContext from './CartContext'

function CartProvider({ children }) {
  //Store the values ​​of the api response in the variable
  const [items, setItems] = useState([])
  const [total, setTotal] = useState([])
  const [subTotal, setsubTotal] = useState([])
  const [shippingTotal, setShipping] = useState([])
  const [discount, setDiscount] = useState([])
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')

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
        number,
        setNumber,
        name,
        setName,
        expiry,
        setExpiry,
        cvc,
        setCvc
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
