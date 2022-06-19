export const convertToReais = (value) => {
  return Number(value).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  })
}

export const hideCardNumber = (number) => {
  return '****.****.****.' + number.substr(-4)
}
