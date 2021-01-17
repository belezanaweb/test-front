import reducer, { initialState } from './reducer'

import * as type from './actionTypes'

import { cart } from './mocks'

describe('Cart Reducer', () => {
  it('should return the initial state', () => {
    const action = {
      type: 'DUMMY_TYPE'
    }
    expect(reducer(undefined, action)).toEqual(initialState)
  })
  it('should get cart data', () => {
    const action = {
      type: type.SAVE,
      payload: cart
    }
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      ...cart
    })
  })
})
