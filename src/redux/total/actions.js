import ApiServices from '../../services/ApiServices';

export const SET_VALORES = 'SET_VALORES';

export async function setValores() {

  let valores = await ApiServices.getProducts();

  return dispatch => {
      dispatch({ type: SET_VALORES, payload: valores })
  }
}
