import React, { useEffect } from 'react'
import apiCart from '../../core/api/api.cart'
import { TransactionContext } from '../../core/store/Context'

const Cart = () => {
  const [transaction, settransaction] = React.useContext(TransactionContext)

  useEffect(() => {
    apiCart.getCartData.then(async (response) => {
      const teste = await response.data
      settransaction(teste)
    })
  }, [settransaction])

  console.log('transaction', transaction)

  return <h1>Cart</h1>
}

export default Cart
