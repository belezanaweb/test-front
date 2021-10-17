// Mask price
export function formatPrice(value) {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}

// validate date
export function validDate(value) {
  const regex = new RegExp(/(0[1-9]|10|11|12)\/20[0-9]{2}$/)

  return regex.test(value)
}

// validates the card's expiration date
export function validCurrentDate(expirationDate) {
  const expiration = expirationDate.split('/')

  const date = new Date()

  const year = date.getFullYear()
  const month = date.getMonth() + 1

  if (expiration.length >= 2) {
    //check if the month is less than or equal to the current month and if the year is greater than the current year.
    if (Number(expiration[0]) <= month && Number(expiration[1]) > year) {
      return true
    }
    //check if the month is greater than the current month and if it is the current year.
    if (Number(expiration[0]) > month && Number(expiration[1]) === year) {
      return true
    }
    //check if the month and year is greater than or equal to the current one.
    if (Number(expiration[0]) >= month && Number(expiration[1]) >= year) {
      return true
    }
  }

  return false
}
