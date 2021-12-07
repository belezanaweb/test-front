const utils = {
  format: {
    money: (value) => {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(value)
    }
  },
  hideCardNumber: (value) => {
    if (value) {
      let last = value.slice(value.length - 4)
      return `****.****.****.${last}`
    }
  }
}

export default utils
