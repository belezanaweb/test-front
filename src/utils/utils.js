export const formatCurrency = (value) => {
  return value.toLocaleString('pt-br', { minimumFractionDigits: 2 })
}
