import { Cart } from '../../services/cart.interface';

export const types = {
  LOAD_CART_REQUEST: 'carts/LOAD_CART_REQUEST',
  LOAD_CART_SUCCESS: 'carts/LOAD_CART_SUCCESS',
  LOAD_CART_FAILURE: 'carts/LOAD_CART_FAILURE',

  LOAD_CARTS_REQUEST: 'carts/LOAD_CARTS_REQUEST',
  LOAD_CARTS_SUCCESS: 'carts/LOAD_CARTS_SUCCESS',
  LOAD_CARTS_FAILURE: 'carts/LOAD_CARTS_FAILURE',
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
  loadCartsRequest() {
    return { type: types.LOAD_CARTS_REQUEST };
  },
  loadCartsSuccess(data: Cart[]) {
    return { type: types.LOAD_CARTS_SUCCESS, data };
  },
  loadCartsFailure(error: string) {
    return { type: types.LOAD_CARTS_FAILURE, error };
  },
};

export type CartAction = ActionTypes<typeof actions>;
