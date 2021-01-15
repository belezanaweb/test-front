const initialState = {
  step: 1
}

export default function StepReducer(state = initialState, action) {
  switch (action.type) {
    case '@Steps/ADD_STEP':
      return Object.assign({}, state, {
        step: (state.step = action.payload)
      })
    default:
      return state
  }
}
