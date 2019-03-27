import { REQUEST_PAGE } from './actions';

const initialState = {};

function reducer(state = initialState, action) {

  switch (action.type) {
    case REQUEST_PAGE:
      return Object.assign({}, state, { page: action.payload });

    default:
      return state;
  }
}

export default reducer;
