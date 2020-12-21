import reduceProducts, { initialState, request, onError, onSuccess } from './products'

const products = { item: [] }
describe('Products reducers', () => {
  it('Mount reducer with initial state', () => {
    const state = reduceProducts(initialState, {})
    expect(state).toMatchObject(initialState)
  })

  it(`Should change state isLoading when request is called`, () => {
    const state = reduceProducts(initialState, request())
    expect(state).toMatchObject({
      ...initialState,
      isLoading: true
    })
  })

  it(`Should change state error when onError is called`, () => {
    const state = reduceProducts(initialState, onError())
    expect(state).toMatchObject({
      ...initialState,
      isLoading: false,
      error: true
    })
  })

  it(`Should change state data when onSuccess is called`, () => {
    const state = reduceProducts(initialState, onSuccess(products))
    expect(state).toMatchObject({
      ...initialState,
      isLoading: false,
      data: products
    })
  })
})
