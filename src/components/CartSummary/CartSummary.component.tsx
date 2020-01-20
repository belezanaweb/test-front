import React from 'react'
import CartSummaryItem from './CartSummaryItem'

interface Props {
  cart?: Cart
}

const CartSummaryComponent: React.FC<Props> = ({ cart }) => {
  const { subTotal, shippingTotal, total, discount } = cart || {}

  return (
    <>
      {cart && cart.subTotal && (
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

export default CartSummaryComponent
