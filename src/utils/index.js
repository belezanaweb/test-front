export function formatBrl(value) {
  return value?.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
}

export function formatDateBrazil(value) {
  return new Date(value)?.toLocaleDateString('pt-br').slice(3).replaceAll('-', '/')
}
