import React from 'react'
import { formatPrice } from '../../../../util/util'
import { Container, Content } from './styles'

const Totals = ({ products }) => {
  const { subTotal, discount, shippingTotal } = products || {}

  // api 'TOTAL' value is wrong

  return (
    <Container>
      <Content>
        <div>
          <span>PRODUTOS</span>
          <span>{formatPrice(subTotal)}</span>
        </div>
        <div>
          <span>FRETE</span>
          <span>{formatPrice(shippingTotal)}</span>
        </div>
        <div className="discount">
          <span>DESCONTO</span>
          <span>{`- ${formatPrice(discount)}`}</span>
        </div>
        <div>
          <strong>TOTAL</strong>
          <strong>{formatPrice(+subTotal + +shippingTotal - +discount)}</strong>
        </div>
      </Content>
    </Container>
  )
}

export default Totals
