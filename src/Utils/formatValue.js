const formatValue = (value) =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

export default formatValue
