import { PAYMENT_INFO } from '../Actions/actionTypes'

const initialState = {
  paymentInfo: {}
};

export const cartReducer = (state = initialState, action) => {
  if (action.type === PAYMENT_INFO) {
    return {
      ...state,
      paymentInfo: action.paymentInfo
    };
  } else {
    return state;
  }
};
