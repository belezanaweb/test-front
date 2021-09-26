export const redirect = (url, history) => {
  try {
    history.push(url)
  } catch (error) {
    console.log(error)
  }
}

export const formatCoinStr = (value, prefixo) => {
  try {
    if (value) return `${prefixo || ''}$ ${Number(value).toFixed(2)}`
    return '$0.00'
  } catch (error) {
    console.log(error)
    return '$'
  }
}

export const onlyNumbers = (str) => {
  try {
    if (str) return str.replace(/\D/g, '')
    return ''
  } catch (error) {
    console.log(error)
    return ''
  }
}
