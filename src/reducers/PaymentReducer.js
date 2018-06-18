
//---------------------------------
//  Payment Reducer
//
//  We can set the variables of card

// Actions to comunicate with this reducer
import {
    ALTER_CARD_NAME,
    ALTER_CARD_NUMBER,
    ALTER_CARD_VALIDATE,
    ALTER_CARD_CVV
} from '../actions/types';

const INITIAL_STATE = {
    card: {
        number: '',
        name: '',
        validate: '',
        cvv: ''
    }
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ALTER_CARD_NAME:
            return {
                ...state, card: {
                    ...state.card,
                    name: action.payload
                }
            }

        case ALTER_CARD_NUMBER:
            return {
                ...state, card: {
                    ...state.card,
                    number: action.payload
                }
            }

        case ALTER_CARD_VALIDATE:
            return {
                ...state, card: {
                    ...state.card,
                    validate: action.payload
                }
            }

        case ALTER_CARD_CVV:
            return {
                ...state, card: {
                    ...state.card,
                    cvv: action.payload
                }
            }

        default:
            return state;
    }

}
