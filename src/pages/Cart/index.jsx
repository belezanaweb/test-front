import React from 'react'
import { Container } from './styles'
import { Products } from '../../components/Products'
import { Summary } from '../../components/Summary'
import { ActionButton } from '../../components/ActionButton'
import { Header } from '../../components/Header'

export const Cart = () => {
  return (
    <>
      <Header />
      <Container>
        <Products />
        <Summary />
        <ActionButton pathToGo={'/payment'} actionText={'Seguir para o pagamento'} />
      </Container>
    </>
  )
}
