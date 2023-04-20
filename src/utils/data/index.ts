export const maskCardNumber = (cardNumber: string) => {
  const value = cardNumber.replace(/\s/g, '')

  if (value.length === 16) {
    return value.slice(-4).padStart(16, '*')
  }

  return ''
}
