export function currency(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function cardNumber(value = '') {
  const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
  const matches = v.match(/\d{4,16}/g)
  const match = (matches && matches[0]) || ''
  const parts = []

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4))
  }

  if (parts.length) {
    return parts.join('.')
  }

  return value.replace(/(?!\s+)\D/g, '')
}


export function cardExpiration(value = '') {
  return value.replace(/\D/g, '').replace(/\d{3}/, digits => {
    return digits.slice(0, 2) + '/' + digits.slice(2)
  })
}


export function maskCardNumber(value = '') {
  const lastFourDigits = value.slice(-4)
  return '****.****.****.' + lastFourDigits
}
