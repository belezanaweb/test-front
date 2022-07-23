import React from 'react'
import { Container } from './style'
import { numberToCurrency } from '../../utils'

export const CartPrice = ({ cartPrice }) => {
  return (
    <Container>
      <div>
        <p>Produtos</p>
        <p>{cartPrice?.subTotal && numberToCurrency(cartPrice?.subTotal)}</p>
      </div>
      <div>
        <p>Frete</p>
        <p>{cartPrice?.shippingTotal && numberToCurrency(cartPrice?.shippingTotal)}</p>
      </div>
      <div className="orange">
        <p>Desconto</p>
        <p>{cartPrice?.discount && '- ' + numberToCurrency(cartPrice?.discount)}</p>
      </div>
      <div>
        <p>
          <strong>Total</strong>
        </p>
        <p>
          <strong>{cartPrice?.total && numberToCurrency(cartPrice?.total)}</strong>
        </p>
      </div>
    </Container>
  )
}
