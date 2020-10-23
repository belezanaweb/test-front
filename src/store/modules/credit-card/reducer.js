import { POST_CREDIT_CARD_FAILURE, POST_CREDIT_CARD_REQUEST, POST_CREDIT_CARD_SUCCESS } from './actions';

export default (state = { isLoading: false }, action) => {
  switch(action.type) {
    case POST_CREDIT_CARD_REQUEST:
      return { isLoading: true };
    case POST_CREDIT_CARD_SUCCESS:
      return { ...action.payload.creditCard, isLoading: false };
    case POST_CREDIT_CARD_FAILURE:
      return { ...action.payload, isLoading: false };
    default:
      return state;
  }
}
