import React from 'react'

import { Container } from '../styles/globalStyle'
import { CreditCardInfo, Products, SuccessLabel, Summary } from '../components'

export function Confirmation() {
  return (
    <Container>
      <main>
        <SuccessLabel>COMPRA EFETUADA COM SUCESSO</SuccessLabel>
        <CreditCardInfo />
        <Products />
        <Summary />
      </main>
    </Container>
  )
}
