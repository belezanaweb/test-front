const format = {
  hideCardNumber: (number) => {
    if (number) {
      const lastFour = number.slice(number.length - 4)
      return `****.****.****.${lastFour}`
    }
  },

  price: (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  },

  cardNumber: (number) => {
    if (number) {
      return number
        .replace(/\D/g, '')
        .replace(/(\d{4})(\d)/, '$1.$2')
        .replace(/(\d{4})(\d)/, '$1.$2')
        .replace(/(\d{4})(\d)/, '$1.$2')
        .replace(/(\d{4})\d+?$/, '$1')
    }
  },

  expirationDate: (date) => {
    if (date) {
      return date
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{4})\d+?$/, '$1')
    }
  },

  cvvCode: (code) => {
    if (code) {
      return code.replace(/\D/g, '').replace(/(\d{3})\d+?$/, '$1')
    }
  }
}

export default format
