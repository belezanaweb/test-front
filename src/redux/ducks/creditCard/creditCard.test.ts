import { AnyAction } from 'redux'
import reducer from './'

const initialState = {
  holder: '',
  number: 0,
  expirationDate: '',
  cvv: 0
}

describe('creditCardSlice', () => {
  it('should return the initialState', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual(initialState)
  })
})
