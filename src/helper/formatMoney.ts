export default function formatMoney(value: number) {
  const valueToFormat = value || 0;
  return valueToFormat.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  });
}
