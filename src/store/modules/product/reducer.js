import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from './actions';

export default (state = { isLoading: false }, action) => {
  switch(action.type) {
    case FETCH_PRODUCT_REQUEST:
      return { isLoading: true };
    case FETCH_PRODUCT_SUCCESS:
      return { ...action.payload.product, isLoading: false };
    case FETCH_PRODUCT_FAILURE:
      return { ...action.payload, isLoading: false };
    default:
      return state;
  }
}
