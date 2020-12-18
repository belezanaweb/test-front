import { AxiosPromise } from 'axios';

import api from './index';
import { Cart } from './cart.interface';

export const loadCartApi = (id: string): AxiosPromise<Cart> => {
  return api.get(`/${id}`);
};
