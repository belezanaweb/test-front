import ApiServices from '../../services/ApiServices';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';

export async function getProducts() {

  let products = await ApiServices.getProducts();

  return dispatch => {
      dispatch({ type: REQUEST_PRODUCTS, payload: products })
  }
}
