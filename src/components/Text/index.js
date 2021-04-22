import React from 'react'

import { Container } from './styles'

export const Text = ({ children, type, align }) => (
  <Container type={type} align={align}>
    {children}
  </Container>
)
