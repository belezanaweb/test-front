export const redirect = (url, history) => {
  try {
    history.push(url)
  } catch (error) {
    console.log(error)
  }
}

export const formatCoinStr = (value) => {
  try {
    if (value) return `$ ${Number(value).toFixed(2)}`
    return '$0.00'
  } catch (error) {
    console.log(error)
    return '$'
  }
}
