import { Types, initialState } from './types';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SHOW:
      return {
        show: true
      };

    case Types.HIDE:
      return {
        show: false
      };

    default:
      return state;
  }
}
