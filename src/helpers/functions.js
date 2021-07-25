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

export function formatExpiry(string) {
  return string
    .replace(/[^0-9]/g, '')
    .replace(/^([2-9])$/g, '0$1')
    .replace(/^(1{1})([3-9]{1})$/g, '0$1/$2')
    .replace(/^0{1,}/g, '0')
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,4}).*/g, '$1/$2')
}

export function validCurrentDate(expirationDate) {
  const expiration = expirationDate.split('/')

  const date = new Date()

  const year = date.getFullYear()
  const month = date.getMonth() + 1

  if (expiration.length >= 2) {
    if (Number(expiration[0]) >= month && Number(expiration[1]) >= year) {
      return true
    }
  }

  return false
}
