import React from 'react'
import { Container } from './styles'

/**
 *  Function to render default card
 *  @property {string} title - title of the card
 */

export default function Navbar({ title }) {
  return (
    <Container>
      <h2>{title}</h2>
    </Container>
  )
}
