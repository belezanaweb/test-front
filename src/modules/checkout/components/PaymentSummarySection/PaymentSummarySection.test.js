import React from 'react'
import { render } from '@testing-library/react'
import PaymentSummarySection, { formatCardNumber } from './PaymentSummarySection'

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

  describe('formatCardNumber', () => {
    it("should format cards with 14 digits (Diner's Club)", () => {
      const mockNumber = '3056 930902 5904'.replace(/\s/g, '')
      expect(formatCardNumber(mockNumber)).toBe('****.******.5904')
    })

    it('should format cards with 15 digits (American Express)', () => {
      const mockNumber = '3782 822463 10005'.replace(/\s/g, '')
      expect(formatCardNumber(mockNumber)).toBe('****.******.10005')
    })

    it('should format cards with 16 digits', () => {
      expect(formatCardNumber('4242 4242 4242 4242'.replace(/\s/g, ''))).toBe('****.****.****.4242')
      expect(formatCardNumber('5555 5555 5555 4444'.replace(/\s/g, ''))).toBe('****.****.****.4444')
    })

    it('should format cards fallback', () => {
      expect(formatCardNumber('1234567890123'.replace(/\s/g, ''))).toBe('*********0123')
      expect(formatCardNumber('123456789012345678'.replace(/\s/g, ''))).toBe('**************5678')
      expect(formatCardNumber('1234567890123456789'.replace(/\s/g, ''))).toBe('***************6789')
    })
  })
})
