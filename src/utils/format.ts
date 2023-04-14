export function formatCardNum(value: string): string {
  const formatted = value.replace(/\D/g, '')
  const groups = formatted.match(/.{1,4}/g)
  return groups ? groups.join(' ') : formatted
}

export function formatCardExpirationDate(value: string): string {
  const v = value.replace(/\D/g, '')
  const month = v.slice(0, 2)
  const year = v.slice(2, 4)
  return `${month}/${year}`
}

export function formatCardNumHidden(value: string): string {
  if (value.length < 16) return ''
  const regex = /(\d{4})\s*$/
  const last4Digits = value.match(regex)?.[1]
  return `****.****.****.${last4Digits ?? ''}`
}
