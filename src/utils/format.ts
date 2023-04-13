export function formatCardNum(value: string): string {
  const formatted = value.replace(/\D/g, '') // remove non-digit characters
  const groups = formatted.match(/.{1,4}/g) // split into groups of 4 digits
  return groups ? groups.join(' ') : formatted
}

export function formatCardExpirationDate(value: string): string {
  const v = value.replace(/\D/g, '')
  const month = v.slice(0, 2)
  const year = v.slice(2, 4)
  return `${month}/${year}`
}
