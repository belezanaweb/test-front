const cachedNumberFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
// source: https://medium.com/@jotafeldmann/desafios-da-localiza%C3%A7%C3%A3o-e-teste-unit%C3%A1rio-no-browser-ad4e0aa2fef3
const UNICODE_NON_BREAKING_SPACE = String.fromCharCode(160)
const USUAL_SPACE = String.fromCharCode(32)

export function formatCurrency (input) {
  return cachedNumberFormat.format(input).replace(UNICODE_NON_BREAKING_SPACE, USUAL_SPACE)
}
