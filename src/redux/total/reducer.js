import { SET_VALORES } from './actions';

const initialState = {
  products : {
    valores : []
  }
};

function reducer(state = initialState, action) {

  switch (action.type) {
    case SET_VALORES:
      return Object.assign({}, state, { valores: action.payload });

    default:
      return state;
  }
}

export default reducer;
