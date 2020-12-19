const Formatters = {
  //Function for format money values in currency BRL
  formatPrice(value) {
    if (isNaN(value)) return value

    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }
}

export default Formatters;
