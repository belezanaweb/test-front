import * as types from './actionTypes';

const initialState = {
  data: '',
  card: '',
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_CART_DATA:
      return {
        ...state,
        data: { ...action.data },
      };
    case types.SET_CARD_DATA:
      return {
        ...state,
        card: { ...action.card },
      };
    default:
      return state;
  }
}
