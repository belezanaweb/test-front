import { RECEIVE_DATA } from "../actions/shared";

export default function shoppingCart (state = {}, action) {
    switch(action.type) {
      case RECEIVE_DATA:
        return action.shoppingCart            
      default :
        return state
    }
}