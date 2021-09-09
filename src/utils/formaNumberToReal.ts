const formatNumberToReal = (number: number): string => {
  return number.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

export default formatNumberToReal
