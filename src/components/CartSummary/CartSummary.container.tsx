import React, { useContext } from 'react'
import CartSummaryComponent from './CartSummary.component'
import CartContext from '../../context/CartContext'

const CartSummaryContainer: React.FC = () => {
  const cart = useContext(CartContext)
  // @ts-ignore: Object with any
  return <CartSummaryComponent cart={cart} />
}

export default CartSummaryContainer
