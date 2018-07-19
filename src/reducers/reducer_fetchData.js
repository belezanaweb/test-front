import { FETCH_BEGIN, FETCH_SUCCESS, FETCH_ERROR } from '../actions'

const initialState = {
    items: [],
    loading: false,
    error: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload
            }
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                items: []
            }

        default:
            return state
    }
}