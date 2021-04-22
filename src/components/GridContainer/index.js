import React from 'react'
import { Container } from './styles'

export const GridContainer = ({ columns, children }) => (
  <Container columns={columns}>{children}</Container>
)
