import 'unfetch/polyfill';

import { show as showLoader, hide as hideLoader } from './loader';

// Action Types

export const Types = {
  SET: 'cart/SET'
};

const initialState = {
  items: [],
  subTotal: 0,
  shippingTotal: 0,
  discount: 0,
  total: 0
};

// Reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}

// Action Creators

export function getCart() {
  return async dispatch => {
    try {
      dispatch(showLoader());

      const response = await fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07');
      const data = await response.json();

      dispatch({
        type: Types.SET,
        payload: data
      });

      return data;
    } finally {
      dispatch(hideLoader());
    }
  };
}
