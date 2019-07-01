import { ADD_CARD_DATA } from './types'

export const addCardData = cardData => (dispatch, getState) => {
  dispatch({
    type: ADD_CARD_DATA,
    payload: cardData
  })
}
