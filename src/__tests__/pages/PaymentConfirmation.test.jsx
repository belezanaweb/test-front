import React from 'react'
import { render } from '../../utils/test-utils'
import PaymentConfirmation from '../../pages/PaymentConfirmation'

jest.mock('../../hooks/checkout.jsx', () => ({
  useCheckout: jest.fn().mockReturnValue({
    cartItems: [],
    cartSummary: {},
    isLoading: false,
    paymentInfo: {
      cardName: 'sample',
      cardNumber: '1234.1234.1234.1234',
      cardValid: '07/1991',
      cardCode: '1234'
    },
    submitPayment: jest.fn()
  })
}))

describe('PaymentConfirmation Page', () => {
  test('should render without errors', () => {
    const { container } = render(<PaymentConfirmation />)
    expect(container).toBeInTheDocument()
  })

  test('should match with snapshot', () => {
    const { container } = render(<PaymentConfirmation />)
    expect(container).toMatchSnapshot()
  })
})
