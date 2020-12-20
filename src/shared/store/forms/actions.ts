import { action } from 'typesafe-actions';

import { FormsTypes, PaymentFormState } from './types';

export const submitForm = (data: PaymentFormState) => action(FormsTypes.SUBMIT_FORM, { data });
