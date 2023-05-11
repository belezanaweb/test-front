import { ResponseBag } from '_types/responses/bag';
import { Payment } from '_types/form/payment';

export enum TypeEnum {
  SET_BAG_DATA = 'SET_BAG_DATA',
  SET_PAYMENT_DATA = 'SET_PAYMENT_DATA',
};

export interface Action {
  type: TypeEnum;
  payload: any;
};

export interface Actions {
  setResponseBagData: (responseBag: ResponseBag) => void;
  setPaymentData: (payment: Payment) => void;
};

export interface State {
  responseBag: ResponseBag,
  payment: Payment,
}

export interface ContextState {
  state: State
  actions: Actions;
};
