// function to check if number card is valid
export function checkNumberCard(value) {
  // remove all non digit characters
  const numberCard = value.replace(/\D/g, '')
  let sum = 0
  let shouldDouble = false
  // loop over each digit and calculate the sum
  for (let i = numberCard.length - 1; i >= 0; i--) {
    // get the current digit
    let digit = parseInt(numberCard.charAt(i))

    if (shouldDouble) {
      if ((digit *= 2) > 9) digit -= 9
    }

    sum += digit
    shouldDouble = !shouldDouble
  }
  // return true if the number card is valid
  if (numberCard > 1) {
    return sum % 10 === 0
  } else return false
}

// function to check if date is valid
export function checkExpiry(value) {
  // separete date and month
  const dateExpiry = value.split('/')

  // set month and year and remove all non digit characters
  const month = dateExpiry?.[0]?.replace(/\D/g, '')
  const year = dateExpiry?.[1]?.replace(/\D/g, '')

  if (month > 12 || month < 1) {
    return false
  } else if (year < 2022 || year > 2030) {
    return false
  }
  return true
}
