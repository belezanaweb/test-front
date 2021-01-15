const numberCard = (value) => {
  const size = value.replace(/\D+/g, '').length
  return size === 16
}

const Name = (value) => {
  const size = value.length
  return size > 10
}

const Expiration = (value) => {
  const size = value.replace(/\D+/g, '').length

  if (size !== 6) {
    return false
  }

  const monthYear = value.split('/').map((value) => Number(value))
  if (monthYear[0] < 1 || monthYear[0] > 12) {
    return false
  }
  if (monthYear[1] < 1970 || monthYear[1] > 2100) {
    return false
  }

  return true
}

const Cvv = (value) => {
  const size = value.replace(/\D+/g, '').length
  return size === 3
}

export const validate = (data, ref) => {
  switch (data) {
    case 'numberCard':
      return { isValid: numberCard(ref), type: data }
    case 'name':
      return { isValid: Name(ref), type: data }
    case 'expiration':
      return { isValid: Expiration(ref), type: data }
    case 'cvv':
      return { isValid: Cvv(ref), type: data }
    default:
  }
}
