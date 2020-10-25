import React from 'react'
import { render, screen } from '@testing-library/react'

import ProductCard from './'

test('render ProductCard component', () => {
  render(<ProductCard />)

  expect(screen.getByText(/ProductCard/i)).toBeInTheDocument()
})
