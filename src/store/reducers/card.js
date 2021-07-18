import { ACTIONS } from '../constants/actions'

const initialState = {
  valid: false,
  cardNum: '',
  cardName: '',
  cardVal: '',
  cardCvv: ''
}

const card = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CARD_UPDATE: {
      return { ...state, ...action.payload }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export { card }
