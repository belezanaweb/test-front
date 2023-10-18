export function cardNumber(value: string) {
  value = value.replace(/\D+/g, '')
  value = value.substring(0, 16)
  value = value.replace(/(\d{4})(?=\d)/g, '$1 ')

  return value
}

export function cvv(value: string) {
  value = value.replace(/\D+/g, '').replace(/(\d{4})\d+?$/, '$1')

  return value
}

export function validateCardData(value: string) {
  value = value.replace(/\D+/g, '')
  value = value.substring(0, 4)
  value = value.replace(/(\d{2})(?=\d)/, '$1/')

  return value
}

export function maskCardNumber(cardNumber: string | undefined): string {
  const last4Digits = cardNumber?.slice(-4)
  return `****.****.****.${last4Digits}`
}
