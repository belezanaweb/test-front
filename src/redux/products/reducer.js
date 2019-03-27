import { REQUEST_PRODUCTS } from './actions';

const initialState = {
  products : {
    items : []
  }
};

function reducer(state = initialState, action) {

  switch (action.type) {
    case REQUEST_PRODUCTS:
      return Object.assign({}, state, { products: action.payload });

    default:
      return state;
    }
}

export default reducer;
