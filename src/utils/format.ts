export function formatCardNum(value: string) {
  return value
    .replace(' ', '')
    .split(/(\d{4})/)
    .filter((w: string) => w.length > 0)
    .join(' ')
}
