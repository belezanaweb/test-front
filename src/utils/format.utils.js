export function currency(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
