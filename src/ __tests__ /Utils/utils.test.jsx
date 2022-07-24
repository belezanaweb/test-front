import {
  numberToCurrency,
  removeMask,
  hiddenCardNumbers,
  maskCard,
  maskExpiryDate,
  maskCvv
} from '../../utils'

test('Float to BRL', () => {
  expect(numberToCurrency(10.0)).toBe('R$ 10,00')
  expect(numberToCurrency(10.5)).toBe('R$ 10,50')
  expect(numberToCurrency(10.05)).toBe('R$ 10,05')
})

test('Remove mask', () => {
  expect(removeMask('9999.9999.9999.9999')).toBe('9999999999999999')
  expect(removeMask('9999 9999 9999 9999')).toBe('9999999999999999')
  expect(removeMask('12/2022')).toBe('122022')
  expect(removeMask('08/2030')).toBe('082030')
})

test('Hide card number', () => {
  expect(hiddenCardNumbers('9999 9999 9999 9999')).toBe('****.****.****.9999')
})

test('Mask card number', () => {
  expect(maskCard('9999999999999999')).toBe('9999 9999 9999 9999')
  expect(maskCard('4916332102327782')).toBe('4916 3321 0232 7782')
  expect(maskCard('36389585071553')).toBe('3638 9585 0715 53')
})

test('Mask expiry date', () => {
  expect(maskExpiryDate('122022')).toBe('12/2022')
  expect(maskExpiryDate('072030')).toBe('07/2030')
  expect(maskExpiryDate('012024')).toBe('01/2024')
})

test('Mask cvv', () => {
  expect(maskCvv('123')).toBe('123')
  expect(maskCvv('123abc')).toBe('123')
})
