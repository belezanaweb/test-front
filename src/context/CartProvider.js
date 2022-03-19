import React, { useState, useEffect } from 'react'
import CartContext from './CartContext'

function CartProvider({ children }) {
  //Store the values ​​of the api response in the variable
  const [items, setItems] = useState([])

  //GET in the mocky.io API --- Params = product name, image, price, discounts and shipping price
  useEffect(() => {
    async function fetchApi() {
      const response = await fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      const { results } = await response.json()
      setItems(results)
    }
    fetchApi()
  }, [])

  return (
    <CartContext.Provider
      value={{
        items,
        setItems
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
