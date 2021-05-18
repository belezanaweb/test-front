const maskCardNumber = (number) => {
  return '****.****.****.' + number.substring(12)
}

const maskDate = (date) => {
  return date.substring(0, 2) + '/' + date.substring(2)
}

export { maskCardNumber, maskDate }
