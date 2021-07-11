export const convertDecimalToCurrency = (value) => {
  if (Number(value) === NaN) return 'R$ 0,00'

  const currenry = Number(value).toFixed(2)
  return `R$ ${currenry.replace('.', ',')}`
}
