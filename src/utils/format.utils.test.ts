import { formatCurrencyBRL } from './format.utils'

describe('FormatUtils', () => {
  describe('formatCurrencyBRL', () => {
    it('should return a string with the formated value', () => {
      const value = 22.5

      const result = formatCurrencyBRL(value)

      expect(typeof result).toEqual('string')
    })

    it('should correctly format BRL currency', () => {
      const value = 22.5

      const result = formatCurrencyBRL(value)

      expect(result).toContain('R$')
      expect(result).toContain('22,50')
    })
  })
})
