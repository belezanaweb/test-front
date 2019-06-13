const normalizPrice = (priceFloat) => {

  const [int, cents = ''] = priceFloat.toString().split('.');

  const finalCents = `${cents}00`.substr(0, 2);

  return `R$ ${int},${finalCents}`;

};

export default normalizPrice;
