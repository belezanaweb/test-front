import utils from './index';

describe('Utils', () => {
  describe('Format', () => {
    it('should return number formatted to Brazilian currency', () => {
      expect(utils.format.currency.toBRL(123)).toMatch(/123,00/);
      expect(utils.format.currency.toBRL(12.3)).toMatch(/12,30/);
    })
  })

  describe('Replace', () => {
    it('should return', () => {
      expect(utils.replace.numbers('1234.1234.1234.1244', 0, 14, '*')).toBe('****.****.****.1244');
      expect(utils.replace.numbers('1234.1234.1234.1244', 10, 11, '*')).toBe('1234.1234.**34.1244');
    })
  })

  describe('Mask', () => {
    it('should return', () => {
      expect(utils.mask.creditCardNumber('123445tywqa')).toBe('1234 45');
      expect(utils.mask.expires('212021')).toBe('21/2021');
      expect(utils.mask.name('Hemer1234son 1234Via3411nna')).toBe('Hemerson Vianna');
      expect(utils.mask.securityCode('wweeaa123')).toBe('123');
    })
  })
})
