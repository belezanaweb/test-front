import React, { useState, useEffect } from 'react'
import Context from './Context'
// import PropTypes from 'prop-types'

export default function Provider({ children }) {
  // const [cardNumber] = useState(10)
  // const [name, setName] = useState();
  // const [date, setDate] = useState();
  // const [CVV, setCVV] = useState();

  // const data = {
  //   cardNumber, setCardNumber,
  //   name, setName,
  //   date, setDate,
  //   CVV, setCVV
  // }

  const [cart, setCart] = useState(null)

  const data = {
    cart,
    setCart
  }
  useEffect(() => {
    const cart = async () => {
      const url = await fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      const data = await url.json()
      setCart(data)
    }
    cart()
  }, [])

  return (
    <div>
      <Context.Provider value={data}>{children}</Context.Provider>
    </div>
  )
}
