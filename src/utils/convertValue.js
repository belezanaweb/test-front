const converValue = (value) => {
  return `R$ ${value.toFixed(2).replace('.', ',')}`
}

export default converValue
