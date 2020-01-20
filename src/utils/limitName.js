const limitName = (name, maxLimit) => {
  if (name.length > maxLimit) {
    return `${name.substring(0, maxLimit)}...`
  }
  return name
}

export default limitName
