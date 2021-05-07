import { createStore } from 'redux'

function counterReducer(state = {}, action) {
  switch (action.type) {
    default:
      return state
  }
}

let store = createStore(counterReducer)

export default store
