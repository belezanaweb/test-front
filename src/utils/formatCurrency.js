const format = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

const formatter = (val = '') => format.format(val)
export default formatter
