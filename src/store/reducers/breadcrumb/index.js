import { LOAD_BREADCRUMB, CHANGE_POSITION } from '../../actionTypes/breadcrumb'

const INITIAL_STATE = []

function breadcrumbReducer(state = INITIAL_STATE, { type, breadcrumb, breadcrumbLabel }) {
  switch (type) {
    case LOAD_BREADCRUMB:
      return [...state, ...breadcrumb]
    case CHANGE_POSITION:
      return state.map((item) => {
        if (item.label === breadcrumbLabel) {
          return { ...item, isSelected: true }
        }
        return { ...item, isSelected: false }
      })
    default:
      return state
  }
}

export default breadcrumbReducer
