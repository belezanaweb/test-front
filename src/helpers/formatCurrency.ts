const formatCurrency = (decimal: any) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  decimal = formatter.format(decimal);
  return decimal;
};

export default formatCurrency;
