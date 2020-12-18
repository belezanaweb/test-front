import { Cart } from '../../services/cart.interface';

export const types = {
  LOAD_CART_REQUEST: 'cart/LOAD_CART_REQUEST',
  LOAD_CART_SUCCESS: 'cart/LOAD_CART_SUCCESS',
  LOAD_CART_FAILURE: 'cart/LOAD_CART_FAILURE',
} as const;

export const actions = {
  loadCartRequest(id: string) {
    return { type: types.LOAD_CART_REQUEST, id };
  },
  loadCartSuccess(data: Cart) {
    return { type: types.LOAD_CART_SUCCESS, data };
  },
  loadCartFailure(error: string) {
    return { type: types.LOAD_CART_FAILURE, error };
  },
};

export type CartAction = ActionTypes<typeof actions>;
