import React, { useEffect } from 'react'
import apiCart from '../../../core/api/api.cart'
import { TransactionContext } from '../../../core/store/Context'
import TitleSection from '../../components/layout/TitleSection'
import SliceCartItems from '../../components/slices/CartItems.slices'
import SliceCartCheckoutInfo from '../../components/slices/CartCheckoutInfo.slices'

const Cart = () => {
  const [transaction, setTransaction] = React.useContext(TransactionContext)

  useEffect(() => {
    apiCart.getCartData.then(async (response) => {
      const data = await response.data
      setTransaction(data)
    })
  }, [setTransaction])

  console.log('transaction', transaction)

  return (
    <>
      <TitleSection title="Produtos" />
      <SliceCartItems transaction={transaction} />
      <SliceCartCheckoutInfo transaction={transaction} />
    </>
  )
}

export default Cart
