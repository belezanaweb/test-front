export const formatValueToBRL = (value: number) =>
  new Intl.NumberFormat('br-PT', { style: 'currency', currency: 'BRL' }).format(value)
