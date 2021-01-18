import reducer, { initialState } from './reducer'

import * as type from './actionTypes'

import { payment } from './mocks'

describe('Cart Reducer', () => {
  it('should return the initial state', () => {
    const action = {
      type: 'DUMMY_TYPE'
    }
    expect(reducer(undefined, action)).toEqual(initialState)
  })
  it('should save payment data', () => {
    const action = {
      type: type.SAVE,
      payload: payment
    }
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      ...payment
    })
  })
})
