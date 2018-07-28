import React from 'react'

import { formatToReal } from '../../utils/currencyFormat'

import { Container } from './styles'

const PurchaseSummaryBox = ({ data: { subTotal, shippingTotal, discount } }) => {
  const total = subTotal + shippingTotal - discount

  return (
    <Container>
      <ul>
        <li>
          <p>PRODUTOS</p>
          <p>{formatToReal(subTotal)}</p>
        </li>
        <li>
          <p>FRETE</p>
          <p>{formatToReal(shippingTotal)}</p>
        </li>
        <li className="discount">
          <p>DESCONTO</p>
          <p> - {formatToReal(discount)}</p>
        </li>
        <li className="total">
          <p>TOTAL</p>
          <p>{formatToReal(total)}</p>
        </li>
      </ul>
    </Container>
  )
}

export default PurchaseSummaryBox
