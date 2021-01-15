export const saveProduct = (data) => {
  return {
    type: '@reducer/ADD_PRODUCTS',
    payload: data
  }
}

export const saveTotal = (data) => {
  return {
    type: '@reducer/ADD_TOTALS',
    payload: data
  }
}
