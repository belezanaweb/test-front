export const creditCardInfo = {
  number: {
    value: '',
    valid: true
  },
  owner: {
    value: '',
    valid: true
  },
  validate: {
    value: '',
    valid: true
  },
  cvv: {
    value: '',
    valid: true
  }
}

export const verifyIfInformationIsValid = (type, value) => {
  const cardValidator = require('card-validator')

  if (type === 'number') {
    return cardValidator.number(value).isValid
  }

  if (type === 'owner') {
    return cardValidator.cardholderName(value).isValid
  }

  if (type === 'validate') {
    return cardValidator.expirationDate(value).isValid
  }

  if (type === 'cvv') {
    return cardValidator.cvv(value).isValid
  }
}

export const validInformations = ({ number, owner, validate, cvv }) => {
  return (
    number &&
    number.value &&
    number.valid &&
    owner &&
    owner.value &&
    owner.valid &&
    validate &&
    validate.value &&
    validate.valid &&
    cvv &&
    cvv.value &&
    cvv.valid
  )
}
