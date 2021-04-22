import React from 'react'

import { Container } from './styles'

export const Card = ({ margin, padding, children }) => (
  <Container margin={margin} padding={padding}>
    {children}
  </Container>
)
