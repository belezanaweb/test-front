import React from 'react'
import CartItem from '../CartItem'

interface Props {
  cart?: Cart
}

const CartListComponent: React.FC<Props> = ({ cart }) => {
  return (
    <section className="cart-list">
      <ul>
        {cart?.items &&
          cart.items.map(cartitem => <CartItem key={cartitem.product.sku} data={cartitem} />)}
        {!cart && <div className="message">Você não possui produtos no carrinho...</div>}
      </ul>
    </section>
  )
}

export default CartListComponent
