export const convertMoney = (value) => {
  return Number(value).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  })
}
