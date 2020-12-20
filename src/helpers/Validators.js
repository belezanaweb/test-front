export const validateCreditCard = (ccNum) => {
  ccNum = ccNum.replace(/[^\d]/g, '')
  if (ccNum.length < 13) return { valid: false, message: 'O número do cartão não está completo' }
  const brands = {
    Visa: /^4\d{12}(\d{3})?$/,
    MasterCard: /^(5[1-5]\d{4}|677189)\d{10}$/,
    Diners: /^3(0[0-5]|[68]\d)\d{11}$/,
    Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    Elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})$/,
    Amex: /^3[47]\d{13}$/,
    JCB: /^(?:2131|1800|35\d{3})\d{11}$/,
    Aura: /^(5078\d{2})(\d{2})(\d{11})$/,
    Hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
    Maestro: /^(?:5[0678]\d\d|6304|6390|67\d\d)\d{8,15}$/
  }
  return !Object.keys(brands).find((brand) => brands[brand].test(ccNum))
    ? { valid: false, message: 'Por favor, informe um cartão de crédito válido.' }
    : { valid: true, message: '' }
}

export const validateCreditCardExpiry = (expiry) => {
  expiry = expiry.replace(/[^\d]/g, '')
  if (expiry.length < 6) return { valid: false, message: 'Deve informar o mês/ano (mm/aaaa).' }
  const month = expiry.substring(0, 2)
  const year = expiry.substring(2, 6)
  const thisYear = new Date().getFullYear()
  const thisMonth = new Date().getMonth() + 1

  return Number(year) < thisYear || (Number(year) === thisYear && Number(month) < thisMonth)
    ? { valid: false, message: 'O seu cartão está expirado.' }
    : { valid: true, message: '' }
}

export const validateCreditCardCvv = (cvv) => {
  cvv = cvv.replace(/[^\d]/g, '')
  return cvv.length < 3
    ? { valid: false, message: 'Deve conter 3 dígitos.' }
    : { valid: true, message: '' }
}


export const validateCustomerName = (name) => {
  return name.length < 5
    ? { valid: false, message: 'Deve conter 5 ou mais caracters.' }
    : { valid: true, message: '' }
}
