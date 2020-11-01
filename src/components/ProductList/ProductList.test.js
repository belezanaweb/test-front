import React from 'react'
import { render } from '@testing-library/react'
import { CartStore } from '../../store/CartStore'
import { ProductList } from './ProductList'

const CartStoreValue = {
  state: {
    items: [
      {
        product: {
          name: 'Teste',
          priceSpecification: {
            price: 123.45
          },
          imageObjects: [
            {
              small: 'http://localhost.test'
            }
          ]
        }
      }
    ]
  }
}

test('renders PaymentForm', () => {
  const { container } = render(
    <CartStore value={CartStoreValue}>
      <ProductList />
    </CartStore>
  )

  expect(container).toMatchSnapshot()
})
