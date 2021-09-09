const normalizeCardExpiringDate = (value: string): string => {
  value = value.replace('/', '')

  if (value.length < 3) return value

  return `${value.substr(0, 2)}/${value.substr(2)}`
}

export default normalizeCardExpiringDate
