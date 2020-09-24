import { Types, initialState } from './types';

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
