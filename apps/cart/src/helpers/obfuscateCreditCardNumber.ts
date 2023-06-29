export function obfuscateCreditCardNumber(creditCardNumber: string) {
  return creditCardNumber
    .replace(/\d(?=\d{4})/g, '*')
    .replace(/^(.{4})(.{4})(.{4})(.*)$/, '$1.$2.$3.$4');
}
