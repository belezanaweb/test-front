import cardValidator from 'card-validator';
import { object, string } from 'yup';

function cardholderName(value: string) {
  const { isValid, isPotentiallyValid } = cardValidator.cardholderName(value);
  return isValid && isPotentiallyValid;
}

function number(value: string) {
  const { isValid, isPotentiallyValid } = cardValidator.number(value);
  return isValid && isPotentiallyValid;
}

function expirationDate(value: string) {
  const { isValid, isPotentiallyValid } = cardValidator.expirationDate(value);
  return isValid && isPotentiallyValid;
}

function cvv(value: string) {
  const valueFormatted = value.replace(/\s/g, '');
  return valueFormatted.length === 3;
}

const validCreditCard = {
  number,
  cardholderName,
  expirationDate,
  cvv,
};

export const schema = object().shape({
  number: string()
    .required('O número do cartão é obrigatório.')
    .test('isValid', 'O número do cartão é inválido.', value => {
      if (!value) return false;
      return validCreditCard.number(value);
    })
    .trim(),
  holder: string()
    .required('O nome do titular é obrigatório.')
    .matches(/^[a-zA-Z\s]*$/, 'O nome do titular é inválido.')
    .trim(),
  expireDate: string()
    .required('A data de validade é obrigatória.')
    .test('isValid', 'A data de validade é inválida.', value => {
      if (!value) return false;
      return validCreditCard.expirationDate(value);
    })
    .trim(),
  cvv: string()
    .required('O código de segurança é obrigatório.')
    .test('isValid', 'O código de segurança é inválido.', value => {
      if (!value) return true;
      return validCreditCard.cvv(value);
    })
    .trim(),
});
