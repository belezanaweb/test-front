import React from 'react'

import Subtotal from '../../components/Subtotal'
import { render, screen } from '../../util/test-utils'

const props = {
  subTotal: 200,
  shippingTotal: 30,
  discount: 10,
  total: 220
}

describe('Product Component', () => {
  it('should render correctly', () => {
    render(<Subtotal {...props} />)

    expect(screen.getByText('PRODUTOS')).toBeInTheDocument()

    expect(screen.getByText('R$ 200,00')).toBeInTheDocument()

    expect(screen.getByText('FRETE')).toBeInTheDocument()

    expect(screen.getByText('R$ 30,00')).toBeInTheDocument()

    expect(screen.getByText('DESCONTO')).toBeInTheDocument()

    expect(screen.getByText('- R$ 10,00')).toBeInTheDocument()

    expect(screen.getByText('TOTAL')).toBeInTheDocument()

    expect(screen.getByText('R$ 220,00')).toBeInTheDocument()
  })

  it('should render discount on orange color', () => {
    render(<Subtotal {...props} />)

    const price = screen.getByText('DESCONTO')

    expect(price).toHaveStyle({ color: '#FF7800' })
  })

  it('should render price in bold', () => {
    render(<Subtotal {...props} />)

    const price = screen.getByText('R$ 220,00')

    expect(price).toHaveStyle({ 'font-weight': '600' })
  })
})
