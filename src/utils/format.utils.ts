export function formatCurrencyBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
}

export function hideCreditCardNumber(value: string) {
  return '****.****.****.' + value.slice(-4)
}
