import { maskCardNumber, validateCartExpirationDate } from './utils'

describe('maskCardNumber', () => {
  test('return the correct mask from a card number', () => {
    expect(maskCardNumber('1234123412341234')).toMatchInlineSnapshot('"****.****.****.1234"')
  })

  test('return empty string when no value is less the 16 characters', () => {
    expect(maskCardNumber('123412341234')).toBeFalsy()
  })
})

describe('validateCartExpirationDate', () => {
  test('return "true" when the date is valid', () => {
    expect(validateCartExpirationDate('13/00')).toBe(false)
    expect(validateCartExpirationDate('00/23')).toBe(false)
    expect(validateCartExpirationDate('13/22')).toBe(false)
    expect(validateCartExpirationDate('12/22')).toBe(false)
    expect(validateCartExpirationDate('12/23')).toBe(true)
    expect(validateCartExpirationDate('12/24')).toBe(true)
    expect(validateCartExpirationDate('12/99')).toBe(true)
  })
})
