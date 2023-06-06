export const formatCardNumber = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{4})(?=\d)/g, '$1 ')
    .substr(0, 19);
};

export const formatHolderName = value => {
  return value.replace(/[^a-zA-Z\u00C0-\u017F\s]/gu, '').substr(0, 60);
};

export const formatExpirationDate = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d{0,4})/, '$1/$2')
    .substr(0, 7);
};

export const formatCVVCode = value => {
  return value.replace(/\D/g, '').substr(0, 3);
};

const validateCreditCard = cardNumber => {
  cardNumber = cardNumber.replace(/\s/g, '');

  if (cardNumber.length !== 16) {
    return false;
  }

  const digits = cardNumber.split('').map(Number);

  // Algoritmo de Luhn para validar o número do cartão
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    let digit = digits[i];

    if (i % 2 === 0) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
  }

  // O número do cartão é válido se a soma dos dígitos for um múltiplo de 10
  return sum % 10 === 0;
};

const isInvalidDate = dateString => {
  const today = new Date();
  const [month, year] = dateString.split('/');
  if (month === '00') {
    return true;
  }
  const userDate = new Date(Number(year), Number(month) - 1);

  return userDate < new Date(today.getFullYear(), today.getMonth());
};

export const validateForm = state => {
  const errors = {};

  if (!validateCreditCard(state.cardNumber)) {
    errors.cardNumber = 'insira um número de cartão válido';
  }

  if (!state.cardHolderName) {
    errors.cardHolderName = 'insira um nome válido';
  }

  if (state.expirationDate.length < 7 || isInvalidDate(state.expirationDate)) {
    errors.expirationDate = 'insira uma data válida';
  }

  if (state.cvv.length < 3) {
    errors.cvv = 'insira um cvv válido';
  }

  return errors;
};
