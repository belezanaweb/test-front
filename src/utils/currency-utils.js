export const convertDecimalToCurrency = (value) => {
  if (isNaN(value)) return 'R$ 0,00'

  const currenry = Number(value).toFixed(2)
  return `R$ ${currenry.replace('.', ',')}`
}
