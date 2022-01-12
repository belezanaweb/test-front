import React from 'react'

import { Container } from '../styles/globalStyle'
import { Button, Products, Summary } from '../components'

export function Bag() {
  return (
    <Container>
      <main>
        <Products />
        <Summary />
        <Button>SEGUIR PARA O PAGAMENTO</Button>
      </main>
    </Container>
  )
}
