import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { CartStore } from '../../store/CartStore'
import { PaymentStore } from '../../store/PaymentStore'
import Payment from './Payment'

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
  },
  dispatch: {
    ccNumber: jest.fn(),
    ccName: jest.fn(),
    ccExpiry: jest.fn()
  }
}

test('renders Payment', async () => {
  const { container } = render(
    <Suspense fallback={<div>Testing...</div>}>
      <CartStore value={CartStoreValue}>
        <PaymentStore value={PaymentStoreValue}>
          <Payment />
        </PaymentStore>
      </CartStore>
    </Suspense>
  )

  await waitFor(() => screen.getByText('Finalizar o pedido'))

  expect(container).toMatchSnapshot()
})

test('Submits payment data', async () => {
  render(
    <Router>
      <Suspense fallback={<div>Testing...</div>}>
        <CartStore value={CartStoreValue}>
          <PaymentStore value={PaymentStoreValue}>
            <Payment />
          </PaymentStore>
        </CartStore>
      </Suspense>
    </Router>
  )

  await waitFor(() => screen.getByText('Finalizar o pedido'))

  fireEvent.change(screen.getByLabelText('Número do cartão:'), {
    target: { value: '1234123412341234' }
  })

  fireEvent.change(screen.getByLabelText('Nome do titular:'), {
    target: { value: 'João da Silva' }
  })

  fireEvent.change(screen.getByLabelText('Validade (mês/ano):'), { target: { value: '12/2022' } })

  fireEvent.change(screen.getByLabelText('CVV:'), { target: { value: '123' } })

  fireEvent.click(screen.getByText('Finalizar o pedido'))
})
