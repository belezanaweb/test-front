import { Cart } from '../../services/cart.interface';

export enum CartTypes {
  LOAD_REQUEST = '@cart/LOAD_REQUEST',
  LOAD_SUCCESS = '@cart/LOAD_SUCCESS',
  LOAD_FAILURE = '@cart/LOAD_FAILURE'
}

export interface CartState {
  readonly data: Cart | null;
  readonly loading: boolean;
  readonly error: boolean;
}
