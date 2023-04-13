export function formatCardNum(value: string) {
  return value
    .replace(/\s/g, '')
    .match(/.{1,4}/g)
    ?.join(' ')
}
