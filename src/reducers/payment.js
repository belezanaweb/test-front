import { ADD_PAYMENT } from './../actions/payment';

export default function shoppingCart (state = {}, action) {
    switch(action.type) {
        case ADD_PAYMENT :
            return action.payment                  
        default :
            return state
    }
}