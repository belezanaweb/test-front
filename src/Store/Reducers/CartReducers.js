import { INIT_CART } from '../Actions/ActionTypes';

const initialState = {
  items: [],
  subTotal: 0,
  shippingTotal: 0,
  discount: 0,
  total: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_CART:
      return {
        ...state,
        ...action.payload
      }
    default: return state;
  }
};