const defaultResponse = (value) => {
  return {
    value: value.replace(/\s/g, ''),
    hasError: false,
    errorMessage: ''
  }
}

export const validateCreditCard = (value) => {
  let response = defaultResponse(value)

  if (value.trim().length === 0) {
    response.hasError = true
    response.errorMessage = 'Número do cartão de crédito não pode ser vazio.'
  }

  if (value.trim().length !== 16) {
    response.hasError = true
    response.errorMessage = 'Número do cartão de crédito inválido.'
  }

  return response
}

export const validateName = (value) => {
  let response = defaultResponse(value)

  if (value.trim().length === 0) {
    response.hasError = true
    response.errorMessage = 'Nome não pode ser vazio.'
  }

  return response
}

export const validateExpiration = (value) => {
  const REGEX_MM_YY = /(\d{2})\/(\d{2})/
  let response = defaultResponse(value)

  if (!value.match(REGEX_MM_YY)) {
    response.hasError = true
    response.errorMessage = 'Data de expieração inválida.'
  }

  return response
}

export const validateCVV = (value) => {
  let response = defaultResponse(value)

  if (value.trim().length === 0) {
    response.hasError = true
    response.errorMessage = 'CVV não pode ser vazio.'
  }

  if (value.trim().length !== 3) {
    response.hasError = true
    response.errorMessage = 'CVV inválido.'
  }

  return response
}
