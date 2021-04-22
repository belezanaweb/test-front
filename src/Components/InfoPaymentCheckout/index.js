import React from 'react'
import { Container } from './style'
import formatValue from '../../Utils/formatValue'

const InfoPaymentCheckout = ({ infoPayment }) => {
  return (
    <Container>
      <div>
        <span className="description">Produtos</span>
        <span className="value">{formatValue(infoPayment.subTotal)}</span>
      </div>
      <div>
        <span className="description">Frete</span>
        <span className="value">{formatValue(infoPayment.shippingTotal)}</span>
      </div>
      <div className="discount">
        <span className="description">Desconto</span>
        <span className="value">{formatValue(infoPayment.discount)}</span>
      </div>
      <div className="total">
        <span className="description">Total</span>
        <span className="value">{formatValue(infoPayment.total)}</span>
      </div>
    </Container>
  )
}

export default InfoPaymentCheckout
