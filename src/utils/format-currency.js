export const formatToCurrency = (number) =>
  number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).toUpperCase();
