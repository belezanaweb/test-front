export function priceFormat(price) {

  const priceFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    prefix: 'R$ ',
  })

  return priceFormat.format(price)
}
