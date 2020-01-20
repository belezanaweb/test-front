import React from 'react'
import CartItem from '../CartItem'
import Card from '../Card'

interface Props {
  cart?: Cart
}

const CartListComponent: React.FC<Props> = ({ cart }) => {
  return (
    <Card>
      <section className="cart-list">
        <ul className="u-normalizeUl">
          {cart?.items &&
            cart.items.map(cartitem => <CartItem key={cartitem.product.sku} data={cartitem} />)}
          {!cart && <div className="message">Você não possui produtos no carrinho...</div>}
        </ul>
      </section>
    </Card>
  )
}

export default CartListComponent
