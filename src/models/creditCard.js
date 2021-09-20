function validateCreditCard(cardNumber) {
  if (cardNumber.length !== 16) {
    return { valid: false, texto: 'Cartão deve ter 16 dígitos.' }
  } else {
    return { valid: true, texto: '' }
  }
}

function validateCreditCardCVV(cvv) {
  if (cvv.length !== 3) {
    return { valid: false, texto: 'CVV deve ter 3 dígitos.' }
  } else {
    return { valid: true, texto: '' }
  }
}

export { validateCreditCard, validateCreditCardCVV }
