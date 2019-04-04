// CONVERT TO REM
export const rem = (number) => {
  let tmp = number
  tmp = typeof number === 'string' && number.indexOf('px') ? number.replace('px', '') : number
  tmp = parseFloat(tmp)

  return `${tmp / 16}rem` // Minimum to font
}