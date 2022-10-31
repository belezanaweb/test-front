import React from 'react'
import { Container, Content, Text } from './styles'

const NavBar = ({ actualStep }) => {
  const steps = [
    ['cart', 'sacola'],
    ['payment', 'pagamento'],
    ['confirmation', 'confirmação']
  ]

  return (
    <Container>
      <Content>
        {steps.map((step) => (
          <Text key={step[0]} isActualStep={step[0] === actualStep}>
            {step[1]}
          </Text>
        ))}
      </Content>
    </Container>
  )
}

export default NavBar
