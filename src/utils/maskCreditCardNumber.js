const mask = (number = '') => {
  const numberAsArray = number.split('.')
  const lastNumber = numberAsArray[numberAsArray.length - 1]
  const maskedNumber = numberAsArray
    .slice(0, numberAsArray.length - 1)
    .join('.')
    .replace(/\d/g, '*')

  return `${maskedNumber}.${lastNumber}`
}

export default mask
