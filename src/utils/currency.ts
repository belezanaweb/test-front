export function currencyFormat(num: number): string {
  return (
    'R$ ' +
    num
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  )
}
