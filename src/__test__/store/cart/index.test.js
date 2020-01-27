import reducer, { INITIAL_STATE } from '~/store/ducks/cart'
import * as Cart from '~/store/ducks/cart/actions'

describe('Cart Reducer', () => {
  it('Default state', () => {
    const state = reducer(undefined, {})

    expect(state).toStrictEqual(INITIAL_STATE)
  })

  it('Cust receive and save a list of products', () => {
    const products = {
      data: {
        id: 'Test id',
        items: []
      },
      loading: false,
      error: false
    }

    const state = reducer(
      undefined,
      Cart.getCartSuccess({
        id: 'Test id',
        items: []
      })
    )

    expect(state).toStrictEqual(products)
  })
})
