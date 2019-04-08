import {
  CART_PRODUCTS_SUCCESS,
  CART_PRODUCTS_ERROR,
  CART_PAYMENT_SUCCESS,
  CART_PAYMENT_ERROR
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

const fetchPaymentSuccess = data => {
  return {
    type: CART_PAYMENT_SUCCESS,
    payload: data
  }
}

const fetchPaymentError = error => {
  return {
    type: CART_PAYMENT_ERROR,
    payload: error
  }
}
export const fetchPayments = (values) => dispatch => {
  fetch(URL.PRODUCTS_CART, values)
      .then((res) => res.json())
      .then((response) => dispatch(fetchPaymentSuccess((response))))
      .catch((error) => dispatch(fetchPaymentError((error))))
}