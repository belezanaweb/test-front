import React, { useContext } from 'react'
import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

const CartList: React.FC = () => {
  const cart = useContext(CartContext)

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

export default CartList
