const useCurrencyFormat = (value: number) => {
  const currency = 'BRL';

  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency,
  }).format(value);
}

export default useCurrencyFormat;
