import React from 'react'
import { render } from '@testing-library/react'
import PaymentSummarySection from '.'

const mockCCPayment = {
  exp: '05/2019',
  name: 'José da Silva',
  num: '1234123412341234'
}

describe('PaymentSummarySection', () => {
  it('should render [snapshot]', () => {
    const { container } = render(<PaymentSummarySection payment={mockCCPayment} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
