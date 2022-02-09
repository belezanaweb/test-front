import React, { useState } from 'react'

export const TransactionContext = React.createContext({})

export const TransactionProvider = (props) => {
  const [transaction, setTransaction] = useState({
    discount: 0,
    items: [],
    shippingTotal: 0,
    subTotal: 0,
    total: 0,
    creditCard: {
      number: '222',
      name: '',
      expiration: '',
      cvc: ''
    }
  })

  return (
    <TransactionContext.Provider value={[transaction, setTransaction]}>
      {props.children}
    </TransactionContext.Provider>
  )
}
