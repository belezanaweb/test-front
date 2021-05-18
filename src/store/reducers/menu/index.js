import actionsTypes from '../../actionTypes/menu'

const INITIAL_STATE = {
  selected: 'Sacola'
}

function payment(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionsTypes.HANDLESELECTEDMENU:
      return {
        ...state,
        selected: action.selected
      }
    default:
      return state
  }
}

export default payment
