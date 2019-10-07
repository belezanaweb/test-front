export default function validateCreditCardNumber(value: string) {
  const ccNum = value.replace(/\s/g, '');

  const visaPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  const mastPattern = /^(?:5[1-5][0-9]{14})$/;
  const amexPattern = /^(?:3[47][0-9]{13})$/;
  const discPattern = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

  const isVisa = visaPattern.test(ccNum) === true;
  const isMast = mastPattern.test(ccNum) === true;
  const isAmex = amexPattern.test(ccNum) === true;
  const isDisc = discPattern.test(ccNum) === true;

  if (isVisa || isMast || isAmex || isDisc) {
    return true;
  }
  return false;
}
