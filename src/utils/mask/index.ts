export const formatCreditCard = (creditCardNumber: string) =>
  creditCardNumber
    .replace(/[^0-9]/g, '')
    .match(/.{1,4}/g)
    ?.join('.')
    .substring(0, 19) || ''

export const formatValidDate = (date: string) =>
  date
    .replace(/[^0-9]/g, '')
    .match(/\b(?=\w)(\d.{0,1})|(\d.{0,3})/g)
    ?.join('/')
    .substring(0, 7) || ''

export const formatCvv = (cvv: string) => cvv.replace(/[^0-9]/g, '').substring(0, 3) || ''
