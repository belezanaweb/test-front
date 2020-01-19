import * as types from './actionTypes';

const initialState = {
  alert: false,
  title: '',
  description: '',
  route: '/',
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_ALERT:
      return {
        ...state,
        alert: action.payload.alert,
        title: action.payload.title,
        description: action.payload.description,
        route: action.payload.route,
      };

    default:
      return state;
  }
}
