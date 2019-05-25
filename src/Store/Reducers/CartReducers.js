import { INIT_CART } from '../Actions/ActionTypes';

const initialState = {
  carts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_CART:
      return {
        ...state,
        carts: action.payload
      }
    default: return state;
  }
};