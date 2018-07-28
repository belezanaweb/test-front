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
  data: [],
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
        data: action.payload.data,
        error: null,
        loading: false
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
  fetchSuccess: data => ({
    type: Types.FETCH_SUCCESS,
    payload: { data }
  }),
  fetchError: error => ({
    type: Types.FETCH_ERROR,
    payload: { error }
  })
}
