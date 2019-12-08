import { UPDATE_PRODUCT_LIST, PAYMENT_INFO } from './actionTypes'

export const updateProductList = value => ({
    type: UPDATE_PRODUCT_LIST,
    productList: value
});

export const paymentConfirm = value => ({
  type: PAYMENT_INFO,
  paymentInfo: value
});
