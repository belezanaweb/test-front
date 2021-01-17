import { Action, BaseAction } from 'redux-actions'

import * as type from './actionTypes'
import * as actions from './actions'

import { ICart } from './types/IState'

import mockStore from '../../shared/mockedStore'
import { cart } from './mocks'

describe('Cart Actions', () => {
  it(type.GET_PRODUCTS, () => {
    const expected: BaseAction[] = [
      {
        type: type.GET_PRODUCTS
      }
    ]
    const store = mockStore()
    store.dispatch(actions.getProducts())
    expect(store.getActions()).toEqual(expected)
  })

  it(type.SAVE, () => {
    const expected: Action<ICart>[] = [
      {
        type: type.SAVE,
        payload: cart
      }
    ]
    const store = mockStore()
    store.dispatch(actions.save(cart))
    expect(store.getActions()).toEqual(expected)
  })
})
