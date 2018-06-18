
//Chaves para ações
import {
    ALTER_CARD_NAME,
    ALTER_CARD_NUMBER,
    ALTER_CARD_VALIDATE,
    ALTER_CARD_CVV
} from '../actions/types';



//------------------- Getters and Setters -------------------
export const alterCardName = (text) => {

    return dispatch => {
        dispatch({ type: ALTER_CARD_NAME, payload: text });
    }

}
export const alterCardNumber = (text) => {

    return dispatch => {
        dispatch({ type: ALTER_CARD_NUMBER, payload: text });
    }

}
export const alterCardValidate = (text) => {

    return dispatch => {
        dispatch({ type: ALTER_CARD_VALIDATE, payload: text });
    }

}
export const alterCardCvv = (text) => {

    return dispatch => {
        dispatch({ type: ALTER_CARD_CVV, payload: text });
    }

}
