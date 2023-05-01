import { describe, expect } from 'vitest'
import { formatMoney } from '.'

describe('Testing the formatMoney util', () => {
  it('should return a format string if a number is given', () => {
    expect(formatMoney(1)).toBe('1,00')
  })

  it('should return only two numbers after the comma', () => {
    expect(formatMoney(1.921)).toBe('1,92')
  })
})
