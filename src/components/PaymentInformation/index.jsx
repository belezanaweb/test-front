import React from 'react'
import { useSelector } from 'react-redux'
import { SectionHeader } from '../SectionHeader'
import { SectionContainer, Container } from './styles'

export const PaymentInformation = ({ cardNumber, name, expiringDate }) => {
  const paymentInformation = useSelector((state) => state.payment)
  const fourLastDigits = paymentInformation.cardNumber.slice(-4)

  return (
    <SectionContainer>
      <SectionHeader text={'Pagamento'} />
      <Container data-testid="payment-information">
        <p data-testid="card-number-information">{`****.****.****.${fourLastDigits}`}</p>
        <p data-testid="name-information">{paymentInformation.name}</p>
        <p data-testid="expiry-date-information">{paymentInformation.expiryDate}</p>
      </Container>
    </SectionContainer>
  )
}
