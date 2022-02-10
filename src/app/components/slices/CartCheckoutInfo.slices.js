import React from 'react'
import { ContainerCheckoutInfo } from '../../pages/cart/CartPage.style'
import handleRealFormatMoney from '../../../utils/helpers/formatMoney'

const SliceCartCheckoutInfo = (props) => {
  const { transaction } = props

  return (
    <ContainerCheckoutInfo>
      <ul>
        <li>
          <p>Produtos</p>
          <strong>{handleRealFormatMoney(transaction.subTotal)}</strong>
        </li>
        <li>
          <p>Frete</p>
          <strong>{handleRealFormatMoney(transaction.shippingTotal)}</strong>
        </li>
        <li>
          <p>Desconto</p>
          <strong>- {handleRealFormatMoney(transaction.discount)}</strong>
        </li>
        <li>
          <p>Total</p>
          <strong>{handleRealFormatMoney(transaction.total)}</strong>
        </li>
      </ul>
    </ContainerCheckoutInfo>
  )
}

export default SliceCartCheckoutInfo
