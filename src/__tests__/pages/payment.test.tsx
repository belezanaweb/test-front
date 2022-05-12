import React from 'react'
import { Payment } from '../../pages/Payment'
import { render, screen } from '../../util/test-utils'

jest.mock('../../components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menu" />
  }
}))

jest.mock('../../components/PaymentForm', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock PaymentForm" />
  }
}))

jest.mock('../../components/Loader', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Loader" />
  }
}))

describe('Payment Page', () => {
  it('should render sections', () => {
    render(<Payment />)

    expect(screen.queryByTestId('Mock Menu')).not.toBeInTheDocument()
    expect(screen.queryByTestId('Mock PaymentForm')).not.toBeInTheDocument()
    expect(screen.getByTestId('Mock Loader')).toBeInTheDocument()
  })
})
