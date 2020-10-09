const initialState = {
  cart: {},
  payment: {},
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CART': {
      return {
        ...state,
        cart: action.payload.cart,
      };
    }

    case 'SET_PAYMENT': {
      return {
        ...state,
        payment: action.payload.payment,
      };
    }

    default:
      return state;
  }
};

export default cart;
