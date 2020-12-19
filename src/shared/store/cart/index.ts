import { Reducer } from 'redux';
import { CartState, CartTypes } from './types';

const INITIAL_STATE: CartState = {
  data: null,
  loading: false,
  error: false,
};

const reducer: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.LOAD_REQUEST:
      return {...state, loading: true };
    case CartTypes.LOAD_SUCCESS:
      return {...state, data: action.payload.data, loading: false };
    case CartTypes.LOAD_FAILURE:
      return {...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
};

  export default reducer;
