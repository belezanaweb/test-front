export const validatorCard = (content: any, number: number) => {
  return content.replaceAll('_', '').replaceAll('.', '').length === number
}

export const validatorDateCard = (content: any) => {
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1

  if (content.replaceAll('_', '').replaceAll('/', '').length !== 6) {
    return false
  } else if (content.split('/')[0] > 12) {
    return false
  } else if (content.split('/')[1] < year) {
    return false
  } else if (content.split('/')[0] <= month && content.split('/')[1] >= year) {
    return false
  } else {
    return true
  }
}

export const validatorCVV = (content: any, number: number) => {
  return content.replaceAll('_', '').replaceAll('.', '').length === number
}
