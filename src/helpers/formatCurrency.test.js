import { formatCurrency } from './formatCurrency'

describe('formatCurrency', () => {
  it('should format float numbers into BRL currency', () => {
    expect(formatCurrency(1)).toBe('R$ 1,00')
    expect(formatCurrency(2)).toBe('R$ 2,00')
    expect(formatCurrency(2.5)).toBe('R$ 2,50')
    expect(formatCurrency(200.5)).toBe('R$ 200,50')
    expect(formatCurrency(2000.5)).toBe('R$ 2.000,50')
  })
})
