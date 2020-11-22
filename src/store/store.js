import { createStore } from 'redux'

const INITIAL_STATE = {
  data: {
    info: null
  },
  userInfo: {
    info: null
  }
}
function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_CART':
      return { ...state, data: action.data }
    case 'ADD_USER_INFO':
      return {
        ...state,
        userInfo: action.data
      }
    default:
      return state
  }
}

const store = createStore(cart)

export default store
