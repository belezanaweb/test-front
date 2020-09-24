import { Types } from './types';

export function doCheckout(payload) {
  return {
    type: Types.DO_CHECKOUT,
    payload
  };
}
