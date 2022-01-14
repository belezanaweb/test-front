import React from 'react'
import { render, screen } from '@testing-library/react'
import CartTotal from '../CartTotal'

describe('Test of CartTotal', () => {
  test('Test if is rendering', () => {
    render(
      <CartTotal discountPrice={100} shippingPrice={200} productPrice={300} totalPrice={400} />
    )
    expect(screen.getByText('PRODUTOS')).toBeInTheDocument()
    expect(screen.getByText('R$ 300,00')).toBeInTheDocument()
    expect(screen.getByText('FRETE')).toBeInTheDocument()
    expect(screen.getByText('R$ 200,00')).toBeInTheDocument()
    expect(screen.getByText('DESCONTO')).toBeInTheDocument()
    expect(screen.getByText('- R$ 100,00')).toBeInTheDocument()
    expect(screen.getByText('TOTAL')).toBeInTheDocument()
    expect(screen.getByText('R$ 400,00')).toBeInTheDocument()
  })
})
