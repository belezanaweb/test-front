import React, { useState, useEffect } from 'react'
import apiCart from '../../core/api/api.cart'

export const TransactionContext = React.createContext({})

export const TransactionProvider = (props) => {
  const [transaction, setTransaction] = useState({
    discount: 0,
    items: [],
    shippingTotal: 0,
    subTotal: 0,
    total: 0,
    isBuyApproved: false,
    creditCard: {
      number: '',
      name: '',
      expiration: '',
      cvv: ''
    }
  })

  useEffect(() => {
    apiCart.getCartData
      .then(async (response) => {
        const data = await response.data
        setTransaction(data)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [setTransaction])

  return (
    <TransactionContext.Provider value={[transaction, setTransaction]}>
      {props.children}
    </TransactionContext.Provider>
  )
}
