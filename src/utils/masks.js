export const CardMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{4})(\d)/,"$1.$2")
    .replace(/(\d{4})(\d)/,"$1.$2")
    .replace(/(\d{4})(\d)/,"$1.$2")
    .replace(/(\d{4})(\d)/,"$1.$2")
}
export const DataMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/,"$1/$2")
}
export const HideCardMask = value => {
  value = value.split('.')
  return '****.****.****.' + value[3]
}
