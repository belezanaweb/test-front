export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const obfuscateCreditCardNumbers = (number: string) => {
  const allNumbers = number.replace(/\./g, '');

  const firsts = allNumbers.substr(0, allNumbers.length - 4);
  const numbers = allNumbers.substr(allNumbers.length - 4);

  const formatted = `${firsts.replace(/\d/g, '*')}${numbers}`;
  const matched = formatted.match(/.{1,4}/g);

  return matched ? matched.join('.') : '';
};
