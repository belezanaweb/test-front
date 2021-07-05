export function normalizeMoneyValue(value) {
  return parseInt(value).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function currency(value) {
  return `R$ ${normalizeMoneyValue(value)}`;
}
