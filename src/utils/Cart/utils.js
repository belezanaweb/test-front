function clearNumber(value = '') {
  return value.replace(/\D+/g, '')
}

export function formatCreditCardNumber(value) {
  if (!value) {
    return value
  }

  const clearValue = clearNumber(value)
  let nextValue

  return nextValue.trim()
}

export function formatCVC(value, prevValue, allValues = {}) {
  const clearValue = clearNumber(value)
  let maxLength = 3

  return clearValue.slice(0, maxLength)
}

export function formatExpirationDate(value) {
  const clearValue = clearNumber(value)

  if (clearValue.length >= 3) {
    return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`
  }

  return clearValue
}

export function formatFormData(data) {
  return Object.keys(data).map((d) => `${d}: ${data[d]}`)
}
