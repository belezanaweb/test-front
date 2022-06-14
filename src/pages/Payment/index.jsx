import React from 'react'
import { Container } from './styles'
import { Products } from '../../components/Products'
import { Summary } from '../../components/Summary'
import { ActionButton } from '../../components/ActionButton'
import { PaymentInformation } from '../../components/PaymentInformation'
import { Header } from '../../components/Header'

export const Payment = () => {
  return (
    <>
      <Header />
      <Container>
        <Products />
        <Summary />
        <ActionButton pathToGo={'/confirmation'} actionText={'Finalizar o pedido'} />
      </Container>
    </>
  )
}
