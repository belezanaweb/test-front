export const cardNumberFormatter = (value: string) => {
  if (!value) return ''
  const formatted = value.replace(/\D/g, '')
  const groups = formatted.match(/.{1,4}/g)
  return groups ? groups.join(' ') : formatted
}

export function expirationDateFormatter(value: string): string {
    console.log('value', value)
    if (!value) return '';
    const v = value.replace(/\D/g, '')
    const month = v.slice(0, 2)
    const year = v.slice(2, 6)
    console.log('year', year)
    console.log('month', month)
    return `${month}/${year}`
}

export function formatCardNumHidden(value: string): string {
    if (value.length < 16) return ''
    const regex = /(\d{4})\s*$/
    const last4Digits = value.match(regex)?.[1]
    return `****.****.****.${last4Digits ?? ''}`
  }