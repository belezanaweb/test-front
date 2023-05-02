import { formatCurrency } from './format-currency'

test('return the correct format', () => {
  expect(formatCurrency(100)).toMatchInlineSnapshot('"R$ 100,00"')
})

test('return undefined when no value is passed', () => {
  expect(formatCurrency(undefined)).toBeFalsy()
})
