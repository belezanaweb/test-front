import React from 'react'
import { Container } from './style'
import { numberToCurrency } from '../../utils'

export const CartPrice = ({ cartPrice }) => {
  return (
    <Container className={!cartPrice?.total ? 'skeleton' : ''}>
      <div>
        <p>Produtos</p>
        <p className="stripe">{cartPrice?.subTotal && numberToCurrency(cartPrice?.subTotal)}</p>
      </div>
      <div>
        <p>Frete</p>
        <p className="stripe">
          {cartPrice?.shippingTotal && numberToCurrency(cartPrice?.shippingTotal)}
        </p>
      </div>
      <div className="orange">
        <p>Desconto</p>
        <p className="stripe">
          {cartPrice?.discount && '- ' + numberToCurrency(cartPrice?.discount)}
        </p>
      </div>
      <div>
        <p>
          <strong>Total</strong>
        </p>
        <p className="stripe">
          <strong>{cartPrice?.total && numberToCurrency(cartPrice?.total)}</strong>
        </p>
      </div>
    </Container>
  )
}
