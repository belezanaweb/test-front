import { Cart } from '../models/Cart';

function getCurrentCart(): Promise<Cart> {
  return fetch('https://run.mocky.io/v3/d6e9a93f-9741-4494-b81e-637a8e9b8ddd', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
}

export const api = {
  getCurrentCart,
};
