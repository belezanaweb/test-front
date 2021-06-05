import React from 'react'
import { render } from '../../utils/test-utils'
import Cart from '../../pages/Cart'

jest.mock('../../hooks/checkout.jsx', () => ({
  useCheckout: jest.fn().mockReturnValue({
    cartItems: [],
    cartSummary: {},
    isLoading: false
  })
}))

describe('Cart Page', () => {
  test('should render without errors', () => {
    const { container } = render(<Cart />)
    expect(container).toBeInTheDocument()
  })

  test('should match with snapshot', () => {
    const { container } = render(<Cart />)
    expect(container).toMatchSnapshot()
  })
})
