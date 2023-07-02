import { Cart } from 'cart/useCartProvider';

import ENV from '../constants/env';

function getCurrentCart(): Promise<Cart> {
  return fetch(ENV.API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
}

const api = {
  getCurrentCart,
};

export default api;
