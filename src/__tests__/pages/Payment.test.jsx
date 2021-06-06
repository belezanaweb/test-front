import React from 'react'
import { render } from '../../utils/test-utils'
import Payment from '../../pages/Payment'

jest.mock('../../hooks/checkout.jsx', () => ({
  useCheckout: jest.fn().mockReturnValue({
    cartItems: [],
    cartSummary: {},
    isLoading: false
  })
}))

describe('Payment Page', () => {
  test('should render without errors', () => {
    const { container } = render(<Payment />)
    expect(container).toBeInTheDocument()
  })

  test('should match with snapshot', () => {
    const { container } = render(<Payment />)
    expect(container).toMatchSnapshot()
  })
})
