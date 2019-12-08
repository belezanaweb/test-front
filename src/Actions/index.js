import { UPDATE_PRODUCT_LIST } from './actionTypes'

export const updateProductList = value => ({
    type: UPDATE_PRODUCT_LIST,
    productList: value
});
