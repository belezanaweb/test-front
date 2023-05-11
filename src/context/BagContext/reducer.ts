import { ResponseBag } from '_types/responses/bag';
import { Payment } from '_types/form/payment';
import { TypeEnum, State, Action } from './types';

export const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case TypeEnum.SET_BAG_DATA:
      return {
        ...state,
        responseBag: payload as ResponseBag,
      };
    case TypeEnum.SET_PAYMENT_DATA:
      return {
        ...state,
        payment: payload as Payment,
      };
    default:
      return state;
  }
};
