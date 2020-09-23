import axios from 'axios';

import { Types } from './types';

import { show as showLoader, hide as hideLoader } from '../loader/actions';

export function getCart() {
  return async (dispatch) => {
    try {
      dispatch(showLoader());

      const response = await axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07');
      const data = response.data;

      dispatch({
        type: Types.SET,
        payload: data
      });

      return data;
    } finally {
      dispatch(hideLoader());
    }
  };
}
