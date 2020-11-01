import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen, waitFor } from '@testing-library/react'
import { CartStore } from '../../store/CartStore'
import Cart from './Cart'

const CartStoreValue = {
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
  ],
  subTotal: 123.45,
  total: 432.1,
  shippingTotal: 345.67,
  discount: 37.02
}

test('renders Cart', async () => {
  fetch.mockResponseOnce(JSON.stringify(CartStoreValue))

  const { container } = render(
    <Router>
      <Suspense fallback={<div>Testing...</div>}>
        <CartStore>
          <Cart />
        </CartStore>
      </Suspense>
    </Router>
  )

  expect(container).toMatchSnapshot()

  await waitFor(() => screen.getByText('Seguir para o pagamento'))

  expect(container).toMatchSnapshot()
})
