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
  codCreditCard: '',
  dataCreditCard: {}
}

export default function CreditCardReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_NUMBER_CREDITCARD:
      return { ...state, numCreditCard: action.numCreditCard }
    case Types.ADD_NAME_CREDITCARD:
      return { ...state, nameCreditCard: action.nameCreditCard }
    case Types.ADD_EXPIRATIONDATE_CREDITCARD:
      return { ...state, expirationDate: action.expirationDate }
    case Types.ADD_COD_CREDITCARD:
      return { ...state, codCreditCard: action.codCreditCard }
    case Types.GET_FIELDS_VALIDATE:
      return { ...state, dataCreditCard: action.dataCreditCard }
    default:
      return state
  }
}

export const Creators = {
  getFieldsValidate: (dataCreditCard) => {
    let validate = false
    let numCreditCardCustom = dataCreditCard.numCreditCard.replace(/[^a-zA-Z0-9 ]/g, '')
    let numExpirationDate = dataCreditCard.expirationDate.replace(/[^a-zA-Z0-9 ]/g, '')
    if (
      numCreditCardCustom.length == 16 ||
      dataCreditCard.nameCreditCard ||
      numExpirationDate.length == 4 ||
      dataCreditCard.codCreditCard
    ) {
      validate = true
    }

    return {
      type: Types.GET_FIELDS_VALIDATE,
      validate
    }
  }
}
