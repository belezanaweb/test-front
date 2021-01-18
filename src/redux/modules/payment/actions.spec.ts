import { Action } from 'redux-actions'

import * as type from './actionTypes'
import * as actions from './actions'

import { IPayment } from './types/IState'

import mockStore from '../../shared/mockedStore'
import { payment } from './mocks'

describe('Cart Actions', () => {
  it(type.SAVE, () => {
    const expected: Action<IPayment>[] = [
      {
        type: type.SAVE,
        payload: payment
      }
    ]
    const store = mockStore()
    store.dispatch(actions.save(payment))
    expect(store.getActions()).toEqual(expected)
  })
})
