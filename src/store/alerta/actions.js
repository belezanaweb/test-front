import * as types from './actionTypes';

export const setAlert = data => ({
  type: types.SET_ALERT,
  payload: data,
});
