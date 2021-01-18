export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)

export const hideCreditCardNumbers = (value: string) =>
  `****.****.****.${value.substring(value.length - 4)}`
