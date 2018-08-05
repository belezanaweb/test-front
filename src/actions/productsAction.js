export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESSFUL = 'FETCH_PRODUCTS_SUCCESSFUL';
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED';

function fetchProductsStart() {
  return {
    type: FETCH_PRODUCTS_START,
  };
}

function fetchProductsSuccessful(data) {
  return {
    type: FETCH_PRODUCTS_SUCCESSFUL,
    payload: data,
  };
}

function fetchProductsFailed(error) {
  return {
    type: FETCH_PRODUCTS_FAILED,
    payload: error,
  };
}

export function fetchProductsData() {
  return (dispatch) => {
    dispatch(fetchProductsStart());
    return fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then(res => res.json())
      .then(data => dispatch(fetchProductsSuccessful(data)))
      .catch(e => dispatch(fetchProductsFailed(e)));
  };
}
