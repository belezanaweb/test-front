export const numberToCurrency = (val) => {
  return parseFloat(val).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
}

export const removeMask = (v) => {
  if (v) {
    v = v.replace(/[^0-9]+/g, '')
  }
  return v
}

export function maskCvv(v) {
  if (v) {
    v = v.replace(/\D/g, '')
  }
  return v
}

export function maskCard(v) {
  let regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g
  let onlyNumbers = v.replace(/[^\d]/g, '')

  return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
    [$1, $2, $3, $4].filter((group) => !!group).join(' ')
  )
}

export function maskExpiryDate(v) {
  if (v) {
    v = v
      .replace(
        /[^0-9]/g,
        '' // To allow only numbers
      )
      .replace(
        /^([1-9]\/|[2-9])$/g,
        '0$1/' // To handle 3 > 03
      )
      .replace(
        /^1([3-9])$/g,
        '01/$1' // 13 > 01/3
      )
      .replace(
        /^0{1,}/g,
        '0' // To handle 00 > 0
      )
      .replace(
        /^([0-1]{1}[0-9]{1})([0-9]{1,4}).*/g,
        '$1/$2' // To handle 113 > 11/3
      )
  }
  return v
}
