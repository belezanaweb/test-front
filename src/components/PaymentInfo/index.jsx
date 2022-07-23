import React from 'react'
import { Container } from './style'
import { Title } from '../Title'
import { hiddenCardNumbers } from '../../utils'

export const PaymentInfo = ({ paymentInfo }) => {
  return (
    <>
      <Title>Pagamento</Title>
      <Container>
        <div>
          <p>{paymentInfo?.cardNumber && hiddenCardNumbers(paymentInfo?.cardNumber)}</p>
        </div>
        <div>
          <p>{paymentInfo?.cardName && paymentInfo?.cardName}</p>
        </div>
        <div>
          <p>{paymentInfo?.expiryDate && paymentInfo?.expiryDate}</p>
        </div>
      </Container>
    </>
  )
}
