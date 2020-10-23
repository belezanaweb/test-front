export const POST_CREDIT_CARD_REQUEST = 'POST_CREDIT_CARD_REQUEST';
export const POST_CREDIT_CARD_SUCCESS = 'POST_CREDIT_CARD_SUCCESS';
export const POST_CREDIT_CARD_FAILURE = 'POST_CREDIT_CARD_FAILURE';

export function postCreditCardRequest(data) {
  return {
    type: POST_CREDIT_CARD_REQUEST,
    payload: { data }
  };
}

export function postCreditCardSuccess(creditCard) {
  return {
    type: POST_CREDIT_CARD_SUCCESS,
    payload: { creditCard },
  }
}

export function postCreditCardFailure() {
  return {
    type: POST_CREDIT_CARD_FAILURE,
  }
}
