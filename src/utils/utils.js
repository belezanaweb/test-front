export const formatCurrency = (value) => {
  return value.toLocaleString('pt-br', { minimumFractionDigits: 2 })
}

export function formatCardNumber(value) {
  // remove all non digit characters
  var value = value.replace(/\D/g, '')
  var formattedValue
  var maxLength
  // american express, 15 digits
  if (/^3[47]\d{0,13}$/.test(value)) {
    formattedValue = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ')
    maxLength = 17
  } else if (/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(value)) {
    // diner's club, 14 digits
    formattedValue = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ')
    maxLength = 16
  } else if (/^\d{0,16}$/.test(value)) {
    // regular cc number, 16 digits
    formattedValue = value
      .replace(/(\d{4})/, '$1 ')
      .replace(/(\d{4}) (\d{4})/, '$1 $2 ')
      .replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ')
    maxLength = 19
  }

  return formattedValue
}

export function formatValidThru(v) {
  v = v.replace(/\D/g, '')
  v = v.replace(/^(\d\d)(\d)/g, '$1/$2')
  return v
}
