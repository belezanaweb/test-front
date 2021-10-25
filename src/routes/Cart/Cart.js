import React, { useEffect, useContext } from 'react'
import { CartContext } from '../../components/Context/Context'

const Cart = () => {
  const { cartProductsData } = useContext(CartContext)

  useEffect(() => {
    console.log(cartProductsData)
  }, [cartProductsData])

  return (
    <div data-testid="Cart">
      <p>Cart</p>
    </div>
  )
}

export default Cart
