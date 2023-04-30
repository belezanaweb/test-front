export function formatMoney(money: number): string {
  return `${String(money.toFixed(2)).replace('.', ',')}`
}
