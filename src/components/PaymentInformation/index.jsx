import React from 'react'
import { useSelector } from 'react-redux'
import { SectionHeader } from '../SectionHeader'
import { Container } from './styles'

export const PaymentInformation = ({ cardNumber, name, expiringDate }) => {
  const paymentInformation = useSelector((state) => state.payment)
  const fourLastDigits = paymentInformation.cardNumber.slice(-4)

  return (
    <>
      <SectionHeader text={'Pagamento'} />
      <Container>
        <p>{`****.****.****.${fourLastDigits}`}</p>
        <p>{paymentInformation.name}</p>
        <p>{paymentInformation.expiryDate}</p>
      </Container>
    </>
  )
}
