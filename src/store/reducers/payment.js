import { ActionTypeEnum } from "../actions/payment";

const defaultState = {
  creditCardNumber: '',
  creditCardHolder: '',
  creditCardExpDate: '',
}

/**
 * Inserts the action inside the state
 * @param {any} state
 * @param {{type: string, data: any}} action
 */
export function payment(state = defaultState, action) {
  switch (action.type) {
    case ActionTypeEnum.ADD_PAYMENT:
      // Hides credit card number
      const number = action.data.creditCardNumber.split('.')
        .map((part, index) => index === 3 ? part : '****')
        .join('.')

      return {
        ...state,
        creditCardNumber: number,
        creditCardHolder: action.data.creditCardHolder,
        creditCardExpDate: action.data.creditCardExpDate,
      }
    default:
      return state
  }
}

