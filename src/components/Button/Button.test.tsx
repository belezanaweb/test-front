import React from 'react'
import { render, screen } from '@testing-library/react'

import Button from './'

test('render Button component', () => {
  render(<Button />)

  expect(screen.getByText(/button/i)).toBeInTheDocument()
})
