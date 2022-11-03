import React, { useState } from 'react'
import Context from './Context'
// import PropTypes from 'prop-types'

export default function Provider(children) {
  const [cardNumber, setCardNumber] = useState(10)
  // const [name, setName] = useState();
  // const [date, setDate] = useState();
  // const [CVV, setCVV] = useState();

  // const data = {
  //   cardNumber, setCardNumber,
  //   name, setName,
  //   date, setDate,
  //   CVV, setCVV
  // }
  return (
    <div>
      <Context.Provider value={cardNumber}>{children}</Context.Provider>
    </div>
  )
}
