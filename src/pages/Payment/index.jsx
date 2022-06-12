import React from 'react'
import { Container } from './styles'
import { Products } from '../../components/Products'
import { Summary } from '../../components/Summary'
import { ActionButton } from '../../components/ActionButton'
import { PaymentInformation } from '../../components/PaymentInformation'

export const Payment = () => {
  return (
    <Container>
      <Products />
      <Summary />
      <ActionButton actionText={'Finalizar o pedido'} />
    </Container>
  )
}
