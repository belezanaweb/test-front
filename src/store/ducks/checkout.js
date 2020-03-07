// Action Types

export const Types = {
  DO_CHECKOUT: 'checkout/DO_CHECKOUT'
};

const initialState = {
  card_number: '',
  card_holder_name: '',
  card_expiration_date: '',
  card_cvv: ''
};

// Reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.DO_CHECKOUT:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}

// Action Creators

export function doCheckout(payload) {
  return {
    type: Types.DO_CHECKOUT,
    payload
  };
}
