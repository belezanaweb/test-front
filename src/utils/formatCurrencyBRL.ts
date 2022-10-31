const formatCurrencyBRL = (currency: number) => {
  return currency.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
}

export default formatCurrencyBRL
