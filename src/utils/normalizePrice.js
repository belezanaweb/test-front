const normalizPrice = (price) => {

  const priceFloat = Math.abs(parseFloat(price));

  const [int, cents = ''] = priceFloat.toString().split('.');

  const finalCents = `${cents}00`.substr(0, 2);

  return `${price < 0 ? '- ' : ''}R$ ${int},${finalCents}`;

};

export default normalizPrice;
