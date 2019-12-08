import { UPDATE_PRODUCT_LIST } from '../Actions/actionTypes'

const initialState = {
  productList: []
};

export const cartReducer = (state = initialState, action) => {
  if (action.type === UPDATE_PRODUCT_LIST) {
    return {
      ...state,
      productList: action.productList
    };
  } else {
    return state;
  }
};
