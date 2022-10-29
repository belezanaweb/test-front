import React from 'react'
import { Container, Text } from './styles'

const NavBar = ({ actualStep }) => {
  const steps = ['sacola', 'pagamento', 'confirmação']

  return (
    <Container>
      {steps.map((step) => (
        <Text key={step} isActualStep={step === actualStep}>
          {step}
        </Text>
      ))}
    </Container>
  )
}

export default NavBar
