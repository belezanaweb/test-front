export function isExpirationDateValid(value: string): boolean {
  const [month, year] = value.split('/').map((str) => parseInt(str, 10))
  const now = new Date()
  const currentYear = now.getFullYear() % 100
  const currentMonth = now.getMonth() + 1

  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return false
  }

  return true
}

export function isNameValid(value: string): boolean {
  const names = value.split(' ')
  const regex = /^[a-zA-Z ]*$/

  if (!regex.test(value)) {
    return false
  }

  if (names.length < 2) {
    return false
  }

  const lastName = names[names.length - 1]

  if (lastName.length <= 2 || /^[A-Z][a-z]*\.$/.test(lastName)) {
    return false
  }

  return true
}
