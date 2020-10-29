import LOAD_BAG from '../../actions/bag'

const INITIAL_STATE = []

function bagReducer(state = INITIAL_STATE, { type, bag }) {
  switch (type) {
    case LOAD_BAG:
      return {
        ...state,
        bag
      }
    default:
      return state
  }
}

export default bagReducer
