export function toMoney(value: number) {
  // Using "cross-env" and "full-icu" in test script for complete support. 😓
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}
