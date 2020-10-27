import { AnyAction } from 'redux'
import reducer from './'

const initialState = {
  data: {
    discount: 0,
    id: '',
    items: [],
    shippingTotal: 0,
    subTotal: 0,
    total: 0
  },
  loading: 'idle',
  error: false
}

describe('cartSlice', () => {
  it('should return the initialState', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual(initialState)
  })
})
