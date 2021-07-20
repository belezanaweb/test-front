import { ACTIONS } from '../constants/actions';

const initialState = {
  isValid: false,
  cardNum: '',
  cardName: '',
  cardExp: '',
  cardCvv: '',
  isValidCardNum: null,
  isValidCardExp: null,
  isValidCardName: null,
  isValidCardCvv: null
};

const card = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CARD_UPDATE: {
      return { ...state, ...action.payload };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export { card };
