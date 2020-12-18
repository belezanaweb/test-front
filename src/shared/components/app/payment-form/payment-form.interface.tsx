export type TPaymentData = {
  name: string;
  creditCardNumber: string;
  expires: string;
  securityCode: string;
  html?: JSX.Element | string;
};
