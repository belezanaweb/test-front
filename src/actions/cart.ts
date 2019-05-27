import Axios from 'axios';
import { Dispatch } from 'redux';

import { CartType } from '../models/cart.model';
import { types } from './constants';

export const getCart = () => async (dispatch: Dispatch) => {

  try {
    const result = await Axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07');
    dispatch({
      type: types.REQUEST_CART_SUCCESS,
      payload: result.data,
    });
  }
  catch(error) {
    dispatch({
      type: types.REQUEST_CART_FAILED,
      payload: error,
    });
  }
}

export const sentCart = (cartData: CartType) => (dispatch: Dispatch) => {

  dispatch({
    type: types.SENT_CART_SUCCESS,
    payload: cartData,
  });
}
