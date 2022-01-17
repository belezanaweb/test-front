export const validateCreditCard = (unformatedValue) => {
  let value = unformatedValue
  let sum = 0
  let shouldDouble = false
  for (let i = value.length - 1; i >= 0; i--) {
    let digit = parseInt(value.charAt(i))

    if (shouldDouble) {
      if ((digit *= 2) > 9) digit -= 9
    }

    sum += digit
    shouldDouble = !shouldDouble
  }

  let valid = sum % 10 === 0
  let accepted = false

  Object.keys(acceptedCreditCards).forEach(function (key) {
    const regex = acceptedCreditCards[key]
    if (regex.test(value)) {
      accepted = true
    }
  })

  return {
    status: valid && accepted,
    errorMessage: 'Número de cartão inválido'
  }
}

export const validateCVV = (cvv) => {
  let regex = /^([0-9]){3,4}$/g
  return {
    status: regex.test(cvv),
    errorMessage: 'CVV inválido'
  }
}

export const validateField = (value) => {
  return {
    status: value !== '',
    errorMessage: 'Valor inválido'
  }
}

export const validateHolderName = (name) => {
  const regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2}/u
  return {
    status: regex.test(name),
    errorMessage: 'Nome inválido'
  }
}

export const validateExpiryDate = (date) => {
  const regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/
  return {
    status: regex.test(date),
    errorMessage: 'Data inválida'
  }
}

const acceptedCreditCards = {
  visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  mastercard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
  amex: /^3[47][0-9]{13}$/,
  discover: /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
  diners_club: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
  jcb: /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/
}

export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})
