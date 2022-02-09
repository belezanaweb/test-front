import React from 'react'
import { ContainerCheckoutInfo } from '../../pages/cart/CartPage.style'

const SliceCartCheckoutInfo = (props) => {
  const { transaction } = props
  return (
    <ContainerCheckoutInfo>
      <ul>
        <li>
          <p>Produtos</p>
          <strong>{transaction.subTotal}</strong>
        </li>
        <li>
          <p>Frete</p>
          <strong>{transaction.shippingTotal}</strong>
        </li>
        <li>
          <p>Desconto</p>
          <strong>{transaction.discount}</strong>
        </li>
        <li>
          <p>Total</p>
          <strong>{transaction.total}</strong>
        </li>
      </ul>
    </ContainerCheckoutInfo>
  )
}

export default SliceCartCheckoutInfo
