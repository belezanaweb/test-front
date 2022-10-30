const formatCurrencyBRL = (currency) => {
  return parseFloat(currency || 0).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
}

export default formatCurrencyBRL
