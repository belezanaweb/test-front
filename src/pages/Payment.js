import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Container } from '../styles/globalStyle'
import { Button, Summary, CreditCardForm } from '../components'

export function Payment() {
  let navigate = useNavigate()

  return (
    <Container>
      <main>
        <CreditCardForm />
        <Summary />
        <Button onClick={() => navigate('/confirmation')}>FINALIZAR O PEDIDO</Button>
      </main>
    </Container>
  )
}
