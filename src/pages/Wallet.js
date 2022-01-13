import React from 'react'

import { Container } from '../styles/globalStyle'
import { useNavigate } from 'react-router-dom'

import { Button, Products, Summary } from '../components'

export function Wallet() {
  let navigate = useNavigate()

  return (
    <Container>
      <main>
        <Products />
        <Summary />
        <Button onClick={() => navigate('/payment')}>SEGUIR PARA O PAGAMENTO</Button>
      </main>
    </Container>
  )
}
