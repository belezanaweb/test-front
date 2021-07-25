export function formatValue(value) {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}

export function validDate(value) {
  const regex = new RegExp(/(0[1-9]|10|11|12)\/20[0-9]{2}$/)

  return regex.test(value)
}
