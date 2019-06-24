import React from 'react'
import { render } from '@testing-library/react'
import SummarySection from './SummarySection'

const mockOrder = {
  discount: 30,
  shippingTotal: 5.3,
  subTotal: 624.8,
  total: 618.9
}

describe('SummarySection', () => {
  it('should render [snapshot]', () => {
    const { container } = render(<SummarySection order={mockOrder} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
