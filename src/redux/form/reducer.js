import { SET_NUMERO, SET_TITULAR, SET_VALIDADE, SET_CVV } from './actions';

const initialState = {
  numero: '',
  titular: '',
  validade: '',
  cvv: ''
};

function reducer(state = initialState, action) {

  switch (action.type) {
    case SET_NUMERO:
      return Object.assign({}, state, { numero: action.payload });

    case SET_TITULAR:
      return Object.assign({}, state, { titular: action.payload });

    case SET_VALIDADE:
      return Object.assign({}, state, { validade: action.payload });

    case SET_CVV:
      return Object.assign({}, state, { cvv: action.payload });

    default:
      return state;
  }
}

export default reducer;
