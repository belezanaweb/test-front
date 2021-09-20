function validateCreditCard(cardNumber) {
  if (cardNumber.length !== 16) {
    return { valid: false, text: 'Cartão deve ter 16 dígitos.' }
  } else {
    return { valid: true, text: '' }
  }
}

function validateCreditCardCVV(cvv) {
  if (cvv.length !== 3) {
    return { valid: false, text: 'CVV deve ter 3 dígitos.' }
  } else {
    return { valid: true, text: '' }
  }
}

export { validateCreditCard, validateCreditCardCVV }
