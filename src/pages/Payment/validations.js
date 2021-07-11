const defaultResponse = (value) => {
  return {
    value: value.replace(/\s/g, ''),
    hasError: false,
    errorMessage: ''
  }
}

export const validateCreditCard = (value) => {
  let response = defaultResponse(value)

  if (value.trim().length > 16) {
    response.hasError = true
    response.errorMessage = 'Número do cartão de crédito inválido.'
  }

  return response
}

export const validateName = (value) => {
  let response = defaultResponse(value)

  if (value.trim().length == 0) {
    response.hasError = true
    response.errorMessage = 'Nome inválido.'
  }

  return response
}

export const validateExpiration = (value) => {
  let response = defaultResponse(value)

  return response
}

export const validateCVV = (value) => {
  let response = defaultResponse(value)

  return response
}
