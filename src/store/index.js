import { createStore } from 'redux'

function reducer(state = {}, action) {
  switch (action.type) {
    case 'set':
      state = action.param
      return state
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
