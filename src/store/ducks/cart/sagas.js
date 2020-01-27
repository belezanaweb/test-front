import { call, put, all, takeLatest } from 'redux-saga/effects'

import { CartTypes } from '~/store/ducks/cart/types'

import { api } from '~/services/api'
import { formatPrice } from '~/utils/format'
// import limitName from '~/utils/limitName'

import { getCartSuccess, getCartFailure } from './actions'

export function* getCart() {
  try {
    const response = yield call(api.get, '/5b15c4923100004a006f3c07')

    const data = {
      id: response.data.id,
      items: response.data.items,
      subTotal: response.data.subTotal,
      shippingTotal: response.data.shippingTotal,
      discount: response.data.discount,
      total: response.data.total
    }

    for (let index = 0; index < response.data.items.length; index++) {
      const element = response.data.items[index]

      const priceFormatted = formatPrice(element.product.priceSpecification.price)
      const limitedName = element.product.name

      data.items[index].product.priceSpecification = {
        ...element.product.priceSpecification,
        priceFormatted
      }
      data.items[index].product = {
        ...element.product,
        limitedName
      }
    }

    yield put(getCartSuccess(data))
  } catch (error) {
    yield put(getCartFailure())
  }
}

export default all([takeLatest(CartTypes.ADD_TO_CART_REQUEST, getCart)])
