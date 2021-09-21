export const formatMoney = (num: number): string => {
  const base = Math.abs(num).toFixed(2).replace(/\./, ',')
  return num > 0 ? `R$ ${base}` : `- R$ ${base}`
}
