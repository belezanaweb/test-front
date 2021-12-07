export const products = (dispatch, items) => {
  dispatch({ type: 'PRODUCTS', payload: items })
}
