import { combineReducers } from "redux";

import cart from "./cart";
import cardForm from "./cardForm";

export default combineReducers({
  cart,
  cardForm
});
