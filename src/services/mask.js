export const maskCardNumber = (cardNumber) => {
  return cardNumber.replace(/^[\d-\s]+(?=\d{4})/, '************')
}
