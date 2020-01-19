import * as LayoutActions from 'store/loading/actions';
import * as AlertActions from 'store/alerta/actions';
import * as types from './actionTypes';
import { callService } from '../../utils/callService';

import ENV from '../../env'; //eslint-disable-line
const { BASE_URL } = ENV;

export const setCartData = data => ({
  type: types.SET_CART_DATA,
  data,
  loading: false,
});

export const setCardData = card => ({
  type: types.SET_CARD_DATA,
  card,
  loading: false,
});

export const getCartData = () => dispatch => {
  dispatch(LayoutActions.setLoading(true));

  callService(`${BASE_URL}/5b15c4923100004a006f3c07`, 'GET', '')
    .then(response => {
      dispatch(setCartData(response));
      dispatch(LayoutActions.setLoading(false));
    })
    .catch(err => {
      dispatch(
        AlertActions.setAlert({
          alert: true,
          title: 'Oops, algo aconteceu...',
          description: 'Tente novamente mais tarde.',
          route: '/cart',
        })
      );
      dispatch(LayoutActions.setLoading(false));
    });
};
