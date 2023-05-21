export const cardNumberFormatter = (value: string) => {
  if (!value) return ''
  const formatted = value.replace(/\D/g, '')
  const groups = formatted.match(/.{1,4}/g)
  return groups ? groups.join(' ') : formatted
}

export function expirationDateFormatter(value: string): string {
  if (!value) return ''
  const v = value.replace(/\D/g, '')
  const month = v.slice(0, 2)
  const year = v.slice(2, 6)
  return `${month}/${year}`
}
