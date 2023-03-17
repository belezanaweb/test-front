const formatCurrency = (value: number | undefined) => {
  const currency = 'BRL';
  if(!value) {return}

  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency,
  }).format(value);
}

export default formatCurrency;
