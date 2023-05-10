import { ResponseBag } from '../../@types/responses/bag';
import { Payment } from '../../@types/form/payment';
import { TypeEnum, Action } from './types';

export const actionSetResponseBagData = (responseBag: ResponseBag): Action => ({
  type: TypeEnum.SET_BAG_DATA,
  payload: responseBag,
});

export const actionSetPaymentData = (payment: Payment): Action => ({
  type: TypeEnum.SET_PAYMENT_DATA,
  payload: payment,
});
