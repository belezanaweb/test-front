import { formatCardExpiry, formatPrice } from "./Formatters"

test('format price in Real', () => {
  const result = formatPrice(10)
  expect(result.type).toBe('span')
  expect(result.props.children).toMatch(/R\$/i)
})

test('format credit card expiry with one digit between 2 and 9', () => {
  const result = formatCardExpiry('2')
  expect(result).toBe('02')
})

test('format credit card expiry with te digit 1', () => {
  const result = formatCardExpiry('1')
  expect(result).toBe('1')
})

test('format credit card expiry with number bigger then 12', () => {
  const result = formatCardExpiry('16')
  expect(result).toBe('12')
})

test('format credit card expiry with first digit of year bigger then 2', () => {
  const result = formatCardExpiry('123')
  expect(result).toBe('12/2')
})

test('format credit card expiry with first two digits of year greater than 20', () => {
  const result = formatCardExpiry('1225')
  expect(result).toBe('12/20')
})

test('format credit card expiry with year smaller than the current', () => {
  const result = formatCardExpiry('122010')
  const year = new Date().getFullYear();
  expect(result).toBe('12/'+year)
})

test('format credit card expiry valid', () => {
  const result = formatCardExpiry('122028')
  expect(result).toBe('12/2028')
})
