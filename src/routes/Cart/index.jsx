import React from 'react'

import { useOrder } from '../../context/OrderContext';

function Cart(props) {
  const { cart } = useOrder();
  return (
    <section>
        cart
    </section>
  )
}

export default Cart

