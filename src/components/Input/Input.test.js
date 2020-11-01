import React from 'react'
import { render, screen } from '@testing-library/react'
import { Input } from './Input'

test('renders Input', () => {
  const { container } = render(<Input id="teste" label="Teste" />)

  screen.getByLabelText('Teste')

  expect(container).toMatchSnapshot()
})
