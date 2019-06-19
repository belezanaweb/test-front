import { BAG_ALL } from "./bag.types";

export default (state = {}, action) => {
  switch (action.type) {
    case BAG_ALL:
      return action.response;
    default:
      return state;
  }
};
