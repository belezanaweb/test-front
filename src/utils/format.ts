export const currencyFormatter = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

export const creditCardFormatter = (value: string) => {
  return value.replace(/(\d{4}) (\d{4}) (\d{4}) (\d{4})/g, '****.****.****.$4')
}
