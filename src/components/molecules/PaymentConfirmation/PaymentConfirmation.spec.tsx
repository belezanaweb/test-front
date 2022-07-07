import React from 'react'
import { render } from '../../../test-utils'
import { PaymentConfirmation } from './PaymentConfirmation'

const cardNumber = '****.****.****.1234'
const cardName = 'José'
const date = '12/2023'

const renderComponent = () =>
  render(<PaymentConfirmation cardNumber={cardNumber} cardName={cardName} date={date} />)

describe('PaymentConfirmation', () => {
  test('renders correctly', () => {
    const { getByText } = renderComponent()
    getByText(cardNumber)
    getByText(cardName)
    getByText(date)
  })
})
