export const maskCard = (cardNumber) => {
  return cardNumber.replace(/^[\d-\s]+(?=\d{4})/, '****.****.****.')
}
