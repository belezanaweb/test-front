import React from 'react'

import { Container } from './styles'

export const BorderContainer = ({ children, color }) => (
  <Container color={color}>{children}</Container>
)
