export function validateCreditCardNumber(cardNumber) {
  var ccNum = cardNumber.replace(/\./g, '')
  ccNum = ccNum.replace(/\\_/g, '')
  console.log(ccNum)
  var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/
  var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/
  var amexpRegEx = /^(?:3[47][0-9]{13})$/
  var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/
  var isValid = false

  if (visaRegEx.test(ccNum)) {
    isValid = true
  } else if (mastercardRegEx.test(ccNum)) {
    isValid = true
  } else if (amexpRegEx.test(ccNum)) {
    isValid = true
  } else if (discovRegEx.test(ccNum)) {
    isValid = true
  }

  if (isValid) {
    return true
  } else {
    return false
  }
}
