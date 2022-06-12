import React from 'react'
import { Container } from './styles'
import { Products } from '../../components/Products'
import { Summary } from '../../components/Summary'
import { ActionButton } from '../../components/ActionButton'

export const Cart = () => {
  return (
    <Container>
      <Products />
      <Summary />
      <ActionButton actionText={'Seguir para o pagamento'} />
    </Container>
  )
}
