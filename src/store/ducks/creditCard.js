export const Types = {
  ADD_NUMBER_CREDITCARD: 'creditCard/ADD_NUMBER_CREDITCARD',
  ADD_NAME_CREDITCARD: 'creditCard/ADD_NAME_CREDITCARD',
  ADD_EXPIRATIONDATE_CREDITCARD: 'creditCard/ADD_EXPIRATIONDATE_CREDITCARD',
  ADD_COD_CREDITCARD: 'creditCard/ADD_COD_CREDITCARD',
  GET_FIELDS_VALIDATE: 'creditCard/GET_FIELDS_VALIDATE'
}

const INITIAL_STATE = {
  numCreditCard: '',
  nameCreditCard: '',
  expirationDate: '',
  codCreditCard: ''
}

export default function CreditCardReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_NUMBER_CREDITCARD:
      return { ...state, numCreditCard: action.numCreditCard }
    case Types.ADD_NAME_CREDITCARD:
      return { ...state, nameCreditCard: action.nameCreditCard }
    case Types.ADD_EXPIRATIONDATE_CREDITCARD:
      return { ...state, expirationCreditCard: action.expirationDate }
    case Types.ADD_COD_CREDITCARD:
      return { ...state, codCreditCard: action.codCreditCard }
    default:
      return state
  }
}

export const Creators = {
  getFieldsValidate: (numCreditCard, expirationDate, nameCreditCard, codCreditCard) => {
    let validate = false
    let numCreditCardCustom = numCreditCard.replace(/[^a-zA-Z0-9 ]/g, '')
    let numExpirationDate = expirationDate.replace(/[^a-zA-Z0-9 ]/g, '')
    if (
      numCreditCardCustom.length == 16 ||
      nameCreditCard ||
      numExpirationDate.length == 4 ||
      codCreditCard
    ) {
      validate = true
    }

    return {
      type: Types.GET_FIELDS_VALIDATE,
      validate
    }
  }
}
