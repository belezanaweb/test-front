import React from 'react'
import { render, screen } from '@testing-library/react'

import WrapperContent from './'

test('render WrapperContent component', () => {
  render(<WrapperContent />)

  expect(screen.getByText(/WrapperContent/i)).toBeInTheDocument()
})
