import React from 'react'
import { render, screen } from '@testing-library/react'

import NamedInput from './'

test('render NamedInput component', () => {
  render(<NamedInput />)

  expect(screen.getByText(/NamedInput/i)).toBeInTheDocument()
})
