import React from 'react'

import { Container } from './styles'

const PurchaseSummaryBox = ({ data: { subTotal, shippingTotal, discount } }) => {
  const total = subTotal + shippingTotal - discount

  return (
    <Container>
      <ul>
        <li>
          <p>PRODUTOS</p>
          <p>{subTotal}</p>
        </li>
        <li>
          <p>FRETE</p>
          <p>{shippingTotal}</p>
        </li>
        <li className="discount">
          <p>DESCONTO</p>
          <p>{discount}</p>
        </li>
        <li className="total">
          <p>TOTAL</p>
          <p>{Number(total).toFixed(1)}</p>
        </li>
      </ul>
    </Container>
  )
}

export default PurchaseSummaryBox
