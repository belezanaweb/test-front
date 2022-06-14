import React from 'react'
import { Container } from './styles'
import { Products } from '../../components/Products'
import { Summary } from '../../components/Summary'
import { PaymentInformation } from '../../components/PaymentInformation'
import { Header } from '../../components/Header'

export const Confirmation = () => {
  return (
    <>
      <Header />
      <Container>
        <PaymentInformation />
        <Products />
        <Summary />
      </Container>
    </>
  )
}
