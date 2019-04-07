import {
  CART_PRODUCTS_SUCCESS,
  CART_PRODUCTS_ERROR
} from '../constants/actionTypes'

import URL from '../constants/api'

const fetchProductsSuccess = data => {
  return {
    type: CART_PRODUCTS_SUCCESS,
    payload: data
  }
}

const fetchProductsError = error => {
  return {
    type: CART_PRODUCTS_ERROR,
    payload: error
  }
}

export const fetchProductsCart = () => dispatch => {
  fetch(URL.PRODUCTS_CART)
      .then((res) => res.json())
      .then((response) => dispatch(fetchProductsSuccess((response))))
      .catch((error) => dispatch(fetchProductsError((error))))
}