const initialState = {
  products: [],
  totals: []
}

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case '@reducer/ADD_PRODUCTS':
      return Object.assign({}, state, {
        products: state.products.concat(action.payload)
      })
    case '@reducer/ADD_TOTALS':
      return Object.assign({}, state, {
        totals: (state.totals = action.payload)
      })
  }
  return state
}
