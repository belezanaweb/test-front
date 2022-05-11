export const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL'
})

export const formatCreditCardNumber = (creditCardNumber: string) => {
  return creditCardNumber.match(/.{1,4}/g)?.join('.')
}

export const formatExpirationDate = (expirationDate: string) => {
  return `${expirationDate.slice(0, 2)}/20${expirationDate.slice(2, 4)}`
}
