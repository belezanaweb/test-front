import {
  validateCreditCard,
  validateCVV,
  validateExpiryDate,
  validateField,
  validateHolderName
} from './utils'

it('validates Visa credit Card ', () => {
  const creditCardValidationResult = validateCreditCard('4693824948308488')
  return expect(creditCardValidationResult).toStrictEqual({
    status: true,
    errorMessage: 'Número de cartão inválido'
  })
})

it('validates Mastercard credit Card ', () => {
  const creditCardValidationResult = validateCreditCard('2519425668916413')
  return expect(creditCardValidationResult).toStrictEqual({
    status: true,
    errorMessage: 'Número de cartão inválido'
  })
})

it('validates Amex credit Card ', () => {
  const creditCardValidationResult = validateCreditCard('349142697669901')
  return expect(creditCardValidationResult).toStrictEqual({
    status: true,
    errorMessage: 'Número de cartão inválido'
  })
})

it('validates Discover credit Card ', () => {
  const creditCardValidationResult = validateCreditCard('6011739099243609')
  return expect(creditCardValidationResult).toStrictEqual({
    status: true,
    errorMessage: 'Número de cartão inválido'
  })
})

it('validates Diners credit Card ', () => {
  const creditCardValidationResult = validateCreditCard('36349092879096')
  return expect(creditCardValidationResult).toStrictEqual({
    status: true,
    errorMessage: 'Número de cartão inválido'
  })
})

it('validates JCB credit Card ', () => {
  const creditCardValidationResult = validateCreditCard('3589238749648142')
  return expect(creditCardValidationResult).toStrictEqual({
    status: true,
    errorMessage: 'Número de cartão inválido'
  })
})

it('invalidates invalid credit card number ', () => {
  const creditCardValidationResult = validateCreditCard('1234')
  return expect(creditCardValidationResult).toStrictEqual({
    status: false,
    errorMessage: 'Número de cartão inválido'
  })
})

it('validates generic not empty field', () => {
  const creditCardValidationResult = validateField('Test')
  return expect(creditCardValidationResult).toStrictEqual({
    status: true,
    errorMessage: 'Valor inválido'
  })
})

it('invalidates invalid generic empty field', () => {
  const fieldValidationResult = validateField('')
  return expect(fieldValidationResult).toStrictEqual({
    status: false,
    errorMessage: 'Valor inválido'
  })
})

it('validates cvv', () => {
  const cvvValidationResult = validateCVV('123')
  return expect(cvvValidationResult).toStrictEqual({
    status: true,
    errorMessage: 'CVV inválido'
  })
})

it('invalidates invalid cvv', () => {
  const cvvValidationResult = validateCVV('89000')
  return expect(cvvValidationResult).toStrictEqual({
    status: false,
    errorMessage: 'CVV inválido'
  })
})

it('validates expiry Date', () => {
  const expiryDateValidationResult = validateExpiryDate('12/21')
  return expect(expiryDateValidationResult).toStrictEqual({
    status: true,
    errorMessage: 'Data inválida'
  })
})

it('invalidates invalid expiry Date', () => {
  const expiryDateValidationResult = validateExpiryDate('1')
  return expect(expiryDateValidationResult).toStrictEqual({
    status: false,
    errorMessage: 'Data inválida'
  })
})

it('validates holder name', () => {
  const cvvValidationResult = validateHolderName('ANA')
  return expect(cvvValidationResult).toStrictEqual({
    status: true,
    errorMessage: 'Nome inválido'
  })
})

it('invalidates invalid holder name', () => {
  const cvvValidationResult = validateHolderName('878')
  return expect(cvvValidationResult).toStrictEqual({
    status: false,
    errorMessage: 'Nome inválido'
  })
})
