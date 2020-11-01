import React from 'react'
import { render } from '@testing-library/react'
import { CartStore } from '../../store/CartStore'
import { PurchaseSummary } from './PurchaseSummary'

const CartStoreValue = {
  state: {
    items: [],
    subTotal: 123.45,
    total: 432.1,
    shippingTotal: 345.67,
    discount: 37.02
  }
}

test('renders PurchaseSummary', () => {
  const { container } = render(
    <CartStore value={CartStoreValue}>
      <PurchaseSummary />
    </CartStore>
  )

  expect(container).toMatchSnapshot()
})
