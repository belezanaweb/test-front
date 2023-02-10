export const hideCreditCard = (cardNumber: string): string => {
  const cardNumberArray: string[] = cardNumber.split('')

  const hiddenCardNumberArray = cardNumberArray.map((char, index) => {
    if (index < cardNumber.length - 4) {
      if (char === ' '){
        return '.'
      } else {
        return '*'
      }
    } else {
      return char
    }
  })

  return hiddenCardNumberArray.join('');
}
