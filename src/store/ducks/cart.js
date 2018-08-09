export const Types = {
  GET_REQUEST: "cart/GET_REQUEST",
  GET_SUCCESS: "cart/GET_SUCCESS",
};

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getCartRequest: () => ({
    type: Types.GET_REQUEST
  }),
  getCartSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  })
};
