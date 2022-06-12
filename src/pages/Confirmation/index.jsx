import React from 'react'
import { Container } from './styles'
import { Products } from '../../components/Products'
import { Summary } from '../../components/Summary'
import { PaymentInformation } from '../../components/PaymentInformation'

export const Confirmation = () => {
  return (
    <Container>
      <PaymentInformation />
      <Products />
      <Summary />
    </Container>
  )
}
