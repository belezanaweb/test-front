import React, { useState } from 'react'
import Context from './Context'
// import PropTypes from 'prop-types'

export default function Provider({ children }) {
  const [cardNumber] = useState(10)
  // const [name, setName] = useState();
  // const [date, setDate] = useState();
  // const [CVV, setCVV] = useState();

  // const data = {
  //   cardNumber, setCardNumber,
  //   name, setName,
  //   date, setDate,
  //   CVV, setCVV
  // }

  const state = {
    cardNumber
  }

  return (
    <div>
      <Context.Provider value={state}>{children}</Context.Provider>
    </div>
  )
}
