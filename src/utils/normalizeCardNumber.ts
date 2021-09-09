const normalizeCardNumber = (value: string): string => {
  return (
    value
      .replace(/\s/g, '')
      ?.match(/.{1,4}/g)
      ?.join(' ')
      .substr(0, 19) || ''
  )
}

export default normalizeCardNumber
