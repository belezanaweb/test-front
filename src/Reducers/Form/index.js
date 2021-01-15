const initialState = {
  numberCard: false,
  expiration: false,
  cvv: false
}

export default function FormReducer(state = initialState, action) {
  switch (action.type) {
    case '@FormReducer/INCREMENT_VALID':
      if (action.payload === 'numberCard') {
        console.log(action.payload)
        return Object.assign({}, state, {
          numberCard: (state.numbercard = action.valid)
        })
      } else if (action.payload === 'expiration') {
        return Object.assign({}, state, {
          expiration: (state.expiration = action.valid)
        })
      } else {
        return Object.assign({}, state, {
          cvv: (state.cvv = action.valid)
        })
      }

    default:
      return state
  }
}
