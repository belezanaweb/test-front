import React from 'react'
import { CartCheckout, CheckoutInfo } from './style'
import { format } from 'utils'
import { number } from 'prop-types'

const CheckoutDetail = ({ subTotal, shippingTotal, discount, total }) => {
  return (
    <CartCheckout>
      <CheckoutInfo>
        <span>Produto</span>
        <span>{format.currency(subTotal)}</span>
      </CheckoutInfo>
      <CheckoutInfo>
        <span>Frete</span>
        <span>{format.currency(shippingTotal)}</span>
      </CheckoutInfo>
      <CheckoutInfo primary>
        <span>Desconto</span>
        <span>- {format.currency(discount)}</span>
      </CheckoutInfo>
      <CheckoutInfo>
        <span>Total</span>
        <span>{format.currency(total)}</span>
      </CheckoutInfo>
    </CartCheckout>
  )
}

CheckoutDetail.propTypes = {
  subTotal: number.isRequired,
  shippingTotal: number.isRequired,
  discount: number.isRequired,
  total: number.isRequired,

}
export default CheckoutDetail
