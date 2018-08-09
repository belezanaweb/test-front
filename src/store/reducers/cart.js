const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CART_REQUEST":
      return { ...state, loading: true };
    case "CART_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data
      };
    default:
      return state;
  }
}
