import { FETCH_PRODUCTS_SUCCESSFUL } from '../actions/productsAction';

export default function products(state = {}, action) {
  switch (action.type) {
  case FETCH_PRODUCTS_SUCCESSFUL:
    return { ...state, ...action.payload };
  default:
    return state;
  }
}
