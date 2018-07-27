/**
 * Types
 */
export const Types = {
  FETCH_REQUEST: 'cart/FETCH_REQUEST',
  FETCH_SUCCESS: 'cart/FETCH_SUCCESS',
  FETCH_FAILURE: 'cart/FETCH_FAILURE'
}

/**
 * Reducers
 */
const INITIAL_STATE = {
  items: [],
  error: null,
  loading: false
}

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FETCH_REQUEST:
      return {
        ...state,
        loading: true
      }
    case Types.FETCH_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload.items],
        error: null
      }
    case Types.FETCH_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }

    default:
      return state
  }
}

/**
 * Actions
 */
export const Creators = {
  fetchRequest: () => ({
    type: Types.FETCH_REQUEST
  }),
  fetchSuccess: items => ({
    type: Types.FETCH_SUCCESS,
    payload: { items }
  }),
  fetchError: error => ({
    type: Types.FETCH_ERROR,
    payload: { error }
  })
}
