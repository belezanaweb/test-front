import { validateCreditCard, validateCreditCardExpiry, validateCustomerName, validateCreditCardCvv } from './Validators'

test('validate credit card Visa with 16 digits', () => {
  const result = validateCreditCard("4111.1111.1111.1111")
  expect(result.valid).toBeTruthy()
  expect(result.message).toBe('')
})

test('invalidate credit card', () => {
  const result = validateCreditCard("1111.1111.1111.1111")
  expect(result.valid).toBeFalsy()
  expect(result.message).not.toBe('')
})

test('validate customer name', () => {
  const result = validateCustomerName("José da Silva")
  expect(result.valid).toBeTruthy()
  expect(result.message).toBe('')
})

test('invalidate customer name', () => {
  const result = validateCustomerName("A")
  expect(result.valid).toBeFalsy()
  expect(result.message).not.toBe('')
})

test('validate credit card expiry', () => {
  const result = validateCreditCardExpiry("12/2025")
  expect(result.valid).toBeTruthy()
  expect(result.message).toBe('')
})

test('invalidate credit card expiry', () => {
  const result = validateCreditCardExpiry("12/2000")
  expect(result.valid).toBeFalsy()
  expect(result.message).not.toBe('')
})


test('validate credit card cvv', () => {
  const result = validateCreditCardCvv("123")
  expect(result.valid).toBeTruthy()
  expect(result.message).toBe('')
})

test('invalidate credit card cvv', () => {
  const result = validateCreditCardCvv("1")
  expect(result.valid).toBeFalsy()
  expect(result.message).not.toBe('')
})
