export function formatValue(value) {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}

export function validDate(value) {
  const regex = new RegExp(/(0[1-9]|10|11|12)\/20[0-9]{2}$/)

  return regex.test(value)
}

export function formatDate(date) {
  return date
    .replace(
      /[^0-9]/g,
      '' // To allow only numbers
    )
    .replace(
      /^([2-9])$/g,
      '0$1' // To handle 3 > 03
    )
    .replace(
      /^(1{1})([3-9]{1})$/g,
      '0$1/$2' // 13 > 01/3
    )
    .replace(
      /^0{1,}/g,
      '0' // To handle 00 > 0
    )
    .replace(
      /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g,
      '$1/$2' // To handle 113 > 11/3
    )
}
