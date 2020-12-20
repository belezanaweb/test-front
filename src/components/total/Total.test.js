import React from 'react'
import { render, screen } from '@testing-library/react'

import Total from './Total'

const sale = {
  id: '5b15c171e4b0023bb624f616',
  items: [],
  subTotal: 624.8,
  shippingTotal: 5.3,
  discount: 30,
  total: 618.9
}

describe('Total', () => {
  test('renders with mock data', async () => {
    render(<Total sale={sale} />)
    expect(screen.getByText('R$ 624,80')).toBeInTheDocument()
    expect(screen.getByText('R$ 5,30')).toBeInTheDocument()
    expect(screen.getByText('-R$ 30,00')).toBeInTheDocument()
    expect(screen.getByText('R$ 600,10')).toBeInTheDocument()
  })
})
