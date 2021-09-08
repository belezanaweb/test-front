import React from 'react'
import { render, screen } from '@testing-library/react'
import { product } from '../../../../util/mocks'
import Product from '.'

describe('Product component', () => {
  it('Should render correctly', () => {
    render(<Product product={product} />)

    expect(
      screen.getByRole('img', {
        name: /Máscara de reconstrução 500g/i
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/máscara de reconstrução 500g/i)).toBeInTheDocument()
    expect(screen.getByText(/r\$225\.90/i)).toBeInTheDocument()
  })
})
