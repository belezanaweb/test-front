const format = {
  currency: { toBRL: (value: number) => value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
};

export default format;
