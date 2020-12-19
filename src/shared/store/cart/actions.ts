import { action } from 'typesafe-actions';

import { CartTypes } from './types';
import { Cart } from '../../services/cart.interface';

export const loadCartRequest = (id: string) => action(CartTypes.LOAD_REQUEST, { id });
export const loadCartSuccess = (data: Cart) => action(CartTypes.LOAD_SUCCESS, { data });
export const loadCartFailure = (error: string) => action(CartTypes.LOAD_FAILURE, { error });
