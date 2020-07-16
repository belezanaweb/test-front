import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history)
  });
