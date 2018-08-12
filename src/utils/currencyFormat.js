export const formatToReal = value => {
  const formatted = Number(value)
    .toFixed(2)
    .replace('.', ',')

  return `R$ ${formatted}`
}
