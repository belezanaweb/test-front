type masks = 'cardNumber' | 'cardExpDate' | 'cardCensored'
type normalize = (value: string) => string

const normalizeCardNumber: normalize = (value) => {
  return (
    value
      .replace(/\s/g, '')
      .match(/.{1,4}/g)
      ?.join(' ')
      .substr(0, 19) || ''
  )
}

const normalizeExpDate: normalize = (value) => {
  return value
    .replace(/^([1-9]\/|[2-9])$/g, '0$1/')
    .replace(/^(0[1-9]|1[0-2])$/g, '$1/')
    .replace(/^([0-1])([3-9])$/g, '0$1/$2')
    .replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2')
    .replace(/^([0]+)\/|[0]+$/g, '0')
    .replace(/[^\d\/]|^[\/]*$/g, '')
    .replace(/\/\//g, '/')
}

const censorCard: normalize = (value) => {
  const number =
    value
      .replace(/\s/g, '')
      .replace(/\d(?=\d{4})/g, '*')
      .match(/.{1,4}/g)
      ?.join('.')
      .substr(0, 19) || ''
  return number
}

const useMask = (type: masks) => {
  const masks: Record<masks, normalize> = {
    cardNumber: normalizeCardNumber,
    cardCensored: censorCard,
    cardExpDate: normalizeExpDate
  }

  return masks[type]
}

export default useMask
