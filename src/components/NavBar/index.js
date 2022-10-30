import React from 'react'
import { Container, Text } from './styles'

const NavBar = ({ actualStep }) => {
  const steps = [
    ['cart', 'sacola'],
    ['payment', 'pagamento'],
    ['confirmation', 'confirmação']
  ]

  return (
    <Container>
      {steps.map((step) => (
        <Text key={step[0]} isActualStep={step[0] === actualStep}>
          {step[1]}
        </Text>
      ))}
    </Container>
  )
}

export default NavBar
