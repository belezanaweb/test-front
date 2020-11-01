import React from 'react'
import { render } from '@testing-library/react'
import { PaymentStore } from '../../store/PaymentStore'
import { PaymentData } from './PaymentData'

const PaymentStoreData = {
  state: {
    ccNumber: '****.****.****.1234',
    ccName: 'João da Silva',
    ccExpiry: '05/2019'
  }
}

test('renders PaymentData', () => {
  const { container } = render(
    <PaymentStore value={PaymentStoreData}>
      <PaymentData />
    </PaymentStore>
  )

  expect(container).toMatchSnapshot()
})
