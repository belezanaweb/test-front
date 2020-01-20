import React from 'react'
import CartSummaryItem from './CartSummaryItem'
import { CartSummaryStyle } from './style'
interface Props {
  cart?: Cart
}

const CartSummaryComponent: React.FC<Props> = ({ cart }) => {
  const { subTotal, shippingTotal, total, discount } = cart || {}

  return (
    <>
      {cart && cart.subTotal && (
        <CartSummaryStyle className="cart-summary">
          <CartSummaryItem title="Produtos" value={subTotal} />
          <CartSummaryItem title="Frete" value={shippingTotal} />
          <CartSummaryItem discount title="Desconto" value={discount} />
          <CartSummaryItem title="Total" value={total} />
        </CartSummaryStyle>
      )}
    </>
  )
}

export default CartSummaryComponent
