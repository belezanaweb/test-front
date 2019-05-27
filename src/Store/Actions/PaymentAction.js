import { FINISH_SHOPPING } from './ActionTypes';

export const finishShopping = (user) => dispatch => {
  dispatch({
    type: FINISH_SHOPPING,
    payload: user
  })
}