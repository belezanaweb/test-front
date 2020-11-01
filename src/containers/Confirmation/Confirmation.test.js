import React, { Suspense } from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { CartStore } from '../../store/CartStore'
import { PaymentStore } from '../../store/PaymentStore'
import Confirmation from './Confirmation'

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
    ],
    subTotal: 123.45,
    total: 432.1,
    shippingTotal: 345.67,
    discount: 37.02
  }
}

const PaymentStoreValue = {
  state: {
    ccNumber: '****.****.****.1234',
    ccName: 'João da Silva',
    ccExpiry: '05/2019'
  }
}

test('renders Confirmation', async () => {
  const { container } = render(
    <Suspense fallback={<div>Testing...</div>}>
      <CartStore value={CartStoreValue}>
        <PaymentStore value={PaymentStoreValue}>
          <Confirmation />
        </PaymentStore>
      </CartStore>
    </Suspense>
  )

  await waitFor(() => screen.getByText('Compra efetuada com sucesso'))

  expect(container).toMatchSnapshot()
})
