import { BAGS_ALL } from "./bag.types";

export default (state = [], action) => {
  switch (action.type) {
    case BAGS_ALL:
      return action.response;
    default:
      return state;
  }
};
