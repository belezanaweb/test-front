import React from 'react'
import { ContainerCheckoutInfo } from '../../pages/cart/CartPage.style'

const SliceCartCheckoutInfo = (props) => {
  return (
    <ContainerCheckoutInfo>
      <ul>
        <li>
          <p>Produtos</p>
          <strong>{props.transaction.subTotal}</strong>
        </li>
        <li>
          <p>Frete</p>
          <strong>{props.transaction.shippingTotal}</strong>
        </li>
        <li>
          <p>Desconto</p>
          <strong>{props.transaction.discount}</strong>
        </li>
        <li>
          <p>Total</p>
          <strong>{props.transaction.total}</strong>
        </li>
      </ul>
    </ContainerCheckoutInfo>
  )
}

export default SliceCartCheckoutInfo
