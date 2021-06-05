import React from 'react'

import { Container, Title, Content } from './styles'

function Section({ title, children, ...rest }) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  )
}

export default Section
