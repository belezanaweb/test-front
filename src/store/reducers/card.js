const INITIAL_STATE = {
  loading: true,
  data: {
    cardname: null,
    cardnumber: null,
    cardvalidity: null,
    cardcvv: null
  }
}

function card(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'STORE_CARD':
      console.log(action)
      return {
        ...state,
        data: {
          cardname: action.card.cardname,
          cardnumber: action.card.cardnumber,
          cardvalidity: action.card.cardvalidity,
          cardcvv: action.card.cardcvv
        }
      }
    default:
      return state
  }
}

export default card
