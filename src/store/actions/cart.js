export function addProducts(products) {
  return {
    type: ActionTypeEnum.ADD_PRODUCTS,
    data: products,
  }
}
export function updateTotalizers(
  subTotal,
  shippingTotal,
  discount,
  total,
) {
  return {
    type: ActionTypeEnum.UPDATE_TOTALIZERS,
    data: {
      subTotal,
      shippingTotal,
      discount,
      total,
    },
  }
}

export function startLoading() {
  return {
    type: ActionTypeEnum.START_LOADING,
  }
}

export function finishLoading() {
  return {
    type: ActionTypeEnum.FINISH_LOADING,
  }
}

export const ActionTypeEnum = {
  ADD_PRODUCTS: 'ADD_PRODUCTS',
  UPDATE_TOTALIZERS: 'UPDATE_TOTALIZERS',
  START_LOADING: 'START_LOADING',
  FINISH_LOADING: 'FINISH_LOADING',
}
