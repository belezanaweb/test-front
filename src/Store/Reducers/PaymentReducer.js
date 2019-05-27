import { FINISH_SHOPPING } from '../Actions/ActionTypes';

const initialState = {
  name: null,
  cardNumber: null,
  validDate: null,
  cvv: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FINISH_SHOPPING:
      return {
        ...state,
        ...action.payload
      }
    default: return state;
  }
};