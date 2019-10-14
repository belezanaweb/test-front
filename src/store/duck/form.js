
export const Types = {
  CHANGE_INPUT: 'CHANGE_INPUT',
}

const INITIAL_STATE = {}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CHANGE_INPUT:
      const { formName, name, value } = action
      const formInputs = state[formName]
      return { ...state, [formName]: { ...formInputs, [name]: value } }
    default:
      return state
  }
}
