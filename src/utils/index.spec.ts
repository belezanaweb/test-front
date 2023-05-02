import { describe, expect } from 'vitest'
import { formatMoney, maskCardNumber } from '.'

describe('Testing utils', () => {
  describe('Testing the formatMoney util', () => {
    it('should return a format string if a number is given', () => {
      expect(formatMoney(1)).toBe('1,00')
    })

    it('should return only two numbers after the comma', () => {
      expect(formatMoney(1.921)).toBe('1,92')
    })
  })

  describe('Testing the maskCardNumber util', () => {
    it('should return a masked version of a given string', () => {
      expect(maskCardNumber('0000 0000 0000 0000')).toBe('****.****.****.0000')
    })
  })
})
