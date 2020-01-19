import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import CartSummaryItem from './CartSummaryItem'

const CartSummary: React.FC = () => {
  const cart = useContext(CartContext)
  const { subTotal, shippingTotal, total, discount } = cart

  return (
    <>
      {cart.subTotal && (
        <section className="cart-summary">
          <CartSummaryItem title="Produtos" value={subTotal} />
          <CartSummaryItem title="Frete" value={shippingTotal} />
          <CartSummaryItem title="Desconto" value={discount} />
          <CartSummaryItem title="Total" value={total} />
        </section>
      )}
    </>
  )
}

export default CartSummary
