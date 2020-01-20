import React, { useContext } from 'react'
import CartComponent from './CartList.component'
import CartContext from '../../context/CartContext'

const CartListContainer: React.FC = () => {
  const cart = useContext(CartContext)

  // @ts-ignore: Object with any
  return <CartComponent cart={cart} />
}

export default CartListContainer
