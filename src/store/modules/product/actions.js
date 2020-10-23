export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';

export function fetchProductRequest() {
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
}

export function fetchProductSuccess(product) {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: { product },
  }
}

export function fetchProductFailure() {
  return {
    type: FETCH_PRODUCT_FAILURE,
  }
}
