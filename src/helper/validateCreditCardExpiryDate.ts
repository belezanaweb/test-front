export default function validateCreditCardExpiryDate(value: string) {
  const dataPattern = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  if (dataPattern.test(value)) {
    return true;
  }
  return false;
}
