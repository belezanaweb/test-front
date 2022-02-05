export const formatToBRL = (value) => {
  try {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  } catch {
    return 'R$ 0,00'
  }
}
