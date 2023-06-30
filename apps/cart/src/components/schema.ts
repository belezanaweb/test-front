import cardValidator from 'card-validator';
import { object, string } from 'yup';

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
    .transform(value => value?.replace(/\s/g, ''))
    .trim(),
  holder: string()
    .required('O nome do titular é obrigatório.')
    .matches(
      /^(?!\s)([a-zA-Z]+(?:\s[a-zA-Z]+)+)$/,
      'O nome do titular é inválido.',
    )
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
