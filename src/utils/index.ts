export function convertToCurrencyNumber(num: any = 0): any {
  const numValue = typeof num === 'string' ? parseFloat(num) : num;
  return numValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
