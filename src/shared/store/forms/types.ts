export enum FormsTypes {
  SUBMIT_FORM = '@forms/SUBMIT_FORM',
};

export interface PaymentFormState {
  creditCardNumber: string;
  name: string;
  expires: string;
  securityCode: string;
};

export interface FormsState {
  readonly payment: PaymentFormState | null;
};

