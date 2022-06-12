import React from 'react'
import { SectionHeader } from '../SectionHeader'
import { Container } from './styles'

export const PaymentInformation = ({ cardNumber, name, expiringDate }) => {
  // const cardNumberParts = cardNumber.split('.')
  // const fourLastDigits = cardNumberParts[cardNumberParts.length - 1]
  const fourLastDigits = '1234'

  return (
    <>
      <SectionHeader text={'Pagamento'} />
      <Container>
        <p>{`****.****.****.${fourLastDigits}`}</p>
        <p>{name}</p>
        <p>{expiringDate}</p>
      </Container>
    </>
  )
}
