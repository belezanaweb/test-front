import {
  formatCardNumber,
  formatHolderName,
  formatExpirationDate,
  formatCVVCode,
} from './utils';

export const initialState = {
  cardNumber: '',
  cardHolderName: '',
  expirationDate: '',
  cvv: '',
  errors: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'cardNumber':
      return {
        ...state,
        [action.field]: formatCardNumber(action.value),
        errors: {
          ...state.errors,
          [action.field]: undefined,
        },
      };
    case 'cardHolderName':
      return {
        ...state,
        [action.field]: formatHolderName(action.value),
        errors: {
          ...state.errors,
          [action.field]: undefined,
        },
      };
    case 'expirationDate':
      return {
        ...state,
        [action.field]: formatExpirationDate(action.value),
        errors: {
          ...state.errors,
          [action.field]: undefined,
        },
      };
    case 'cvv':
      return {
        ...state,
        [action.field]: formatCVVCode(action.value),
        errors: {
          ...state.errors,
          [action.field]: undefined,
        },
      };
    case 'updateErrors':
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
};
