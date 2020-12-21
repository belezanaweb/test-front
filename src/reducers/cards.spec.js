import reduceProducts, { initialState, onSave, request } from './cards'

const cards = {
  cardNumber: '5559.1047.9356.7730',
  name: 'name',
  validDate: '21/09/2022',
  code: '923'
}
describe('Cards reducers', () => {
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

  it(`Should change state data when onSave is called`, () => {
    const state = reduceProducts(initialState, onSave(cards))
    expect(state).toMatchObject({
      ...initialState,
      isLoading: false,
      data: { ...cards, cardNumber: '****.****.****.7730' }
    })
  })
})
