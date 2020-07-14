import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import carts from "./cart" 

export const generateReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    carts
  });
