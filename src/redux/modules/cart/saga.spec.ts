/* eslint-env jest */
import { call, put } from 'redux-saga/effects'

import * as saga from './saga'
import * as actions from './actions'

import { cart } from './mocks'

describe('Cart Saga', () => {
  it('should get cart data and save it on store', () => {
    const generator = saga.getProducts()

    expect(generator.next().value).toEqual(call(saga.fetchCartData))
    expect(generator.next(cart).value).toEqual(put(actions.save(cart)))
    expect(generator.next()).toEqual({
      value: undefined,
      done: true
    })
  })
})
