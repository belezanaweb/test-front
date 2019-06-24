const cachedNumberFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export function formatCurrency (input) {
  return cachedNumberFormat.format(input)
}
