export function formatMoney(money: number): string {
  return `${String(money.toFixed(2)).replace('.', ',')}`
}

export function maskCardNumber(cardNumber: string) {
  return cardNumber
    .split(' ')
    .map((digits, i) => {
      if (i > 2) {
        return digits
      }
      return '****'
    })
    .join('.')
}
