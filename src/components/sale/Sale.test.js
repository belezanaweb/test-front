import React from 'react'
import { render, screen } from '@testing-library/react'

import Sale from './Sale'

const sale = {
  id: '5b15c171e4b0023bb624f616',
  items: [
    {
      quantity: 1,
      product: {
        sku: '24410',
        name:
          "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
        imageObjects: [
          {
            featured: true,
            thumbnail: 'imagem.png'
          }
        ],
        priceSpecification: {
          sku: '24410',
          price: 225.9,
          originalPrice: 225.9,
          maxPrice: 243.9,
          percent: 7,
          discount: 18
        }
      }
    }
  ],
  subTotal: 624.8,
  shippingTotal: 5.3,
  discount: 30,
  total: 618.9
}

describe('Sale', () => {
  test('renders with mock data', async () => {
    render(<Sale sale={sale} />)
    expect(screen.getByText(sale.items[0].product.name)).toBeInTheDocument()
    expect(screen.getByText('R$ 225,90')).toBeInTheDocument()
  })
})
