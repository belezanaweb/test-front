import { produce } from 'immer';
import { types, CartAction } from './action';
import { Cart } from '../../services/cart.interface';

interface CartState {
  cart: BaseState<Cart>;
  carts: BaseState<Cart[]>;
}

const initialState: CartState = {
  cart: {
    data: null,
    loading: false,
    error: ''
  },
  carts: {
    data: null,
    loading: false,
    error: '',
  },
};

export default (state: CartState = initialState, action: CartAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.LOAD_CART_REQUEST:
        draft.cart.loading = true;
        draft.cart.data = null;
        draft.cart.error = '';
        break;
      case types.LOAD_CART_SUCCESS:
        draft.cart.data = action.data;
        draft.cart.loading = false;
        break;
      case types.LOAD_CART_FAILURE:
        draft.cart.error = action.error;
        draft.cart.loading = false;
        break;
      case types.LOAD_CARTS_REQUEST:
        draft.carts.loading = true;
        draft.carts.data = null;
        draft.carts.error = '';
        break;
      case types.LOAD_CARTS_SUCCESS:
        draft.carts.data = action.data;
        draft.carts.loading = false;
        break;
      case types.LOAD_CARTS_FAILURE:
        draft.carts.error = action.error;
        draft.carts.loading = false;
        break;
      default:
        break;
    }
  });
