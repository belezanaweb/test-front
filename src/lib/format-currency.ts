export const formatCurrency = (value: number | bigint | undefined) => {
  if (!value) return

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2
  }).format(value)
}
