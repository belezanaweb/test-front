export const maskMoneyPtBr = number =>
  parseFloat(number).toLocaleString('pt-br', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
