import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import cart from './cart'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    cart
  });
