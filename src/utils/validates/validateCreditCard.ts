const useValidateCreditCard = (cardNumber: string): boolean => {
  cardNumber = cardNumber.replace(/\s/g, '').replace(/-/g, '');

  if (!/^\d{13,16}$/.test(cardNumber)) {
    return false;
  }

  let sum = 0;
  let shouldDouble = false;
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    var digit = parseInt(cardNumber.charAt(i));

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return (sum % 10) === 0;
}


export default useValidateCreditCard;
