export const secretCardNumber = (number: string) => {
  return `****.****.****.${number.slice(-4)}`;
}
