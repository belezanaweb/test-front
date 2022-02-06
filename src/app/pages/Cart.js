import React, { useEffect } from 'react'
import apiCart from '../../core/api/api.cart'
import { TransactionContext } from '../../core/store/Context'

const Cart = () => {
  const [transaction, setTransaction] = React.useContext(TransactionContext)

  useEffect(() => {
    apiCart.getCartData.then(async (response) => {
      const data = await response.data
      setTransaction(data)
    })
  }, [setTransaction])

  console.log('transaction', transaction)

  return <h1>Cart</h1>
}

export default Cart
