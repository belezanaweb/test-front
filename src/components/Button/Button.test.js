import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

test('renders button', () => {
  render(<Button>Teste</Button>)

  screen.getByText('Teste')
})
