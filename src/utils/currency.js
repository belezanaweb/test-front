export const convertCurrency = (value) => {
  if (isNaN(value)) return 'R$ 0,00'

  const currency = Number(value).toFixed(2)
  return `R$ ${currency.replace('.', ',')}`
}
