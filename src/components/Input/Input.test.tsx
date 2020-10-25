import React from 'react'
import { render, screen } from '@testing-library/react'

import Input from '.'

test('render Input component', () => {
  render(<Input />)

  expect(screen.getByText(/Input/i)).toBeInTheDocument()
})
