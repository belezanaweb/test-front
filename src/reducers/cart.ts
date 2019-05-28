import { types } from '../actions/constants';

export const cart = (state = {}, action?: any) => {

  switch (action.type) {

    case types.REQUEST_CART_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }

    case types.REQUEST_CART_FAILED:
        return {};

    case types.UPDATE_CART_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }

    case types.UPDATE_CART_FAILED:
      return state;

    case types.SENT_CART_SUCCESS:
      return {
        ...state,
        methodPayment: action.payload,
      }

    case types.SENT_CART_FAILED:
      return state;

    case types.CLEAR_PAYMENT_METHOD:
      return {
        ...state,
        methodPayment: null,
      }

    default:
      return state;
  }
}
