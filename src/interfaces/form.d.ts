type FormState = Record<string, string>

type ActionDict = Record<string, (...args: string[]) => FormAction>

interface PaymentOptionComponentProps {
  state: FormState;
  actions: ActionDict;
  errorArray?: string[];
}

interface FormAction {
  type: string;
  payload: {name: string, value: string};
}

type OptionsDict = Record<string, { 
  name: string,
  Component: (props: PaymentOptionComponentProps) => JSX.Element
  actions: ActionDict,
  obligatoryFields: string[],
  validate: (state: FormState) => false | string[]
}>

interface CardForm extends FormState {
  cardNumber: string;
  cardOwner: string;
  cardExpirationDate: string;
  cardSecurityCode: string;
}
//other payment forms will have separated types added here as |
type MultiplePaymentOptionsState = CardForm;

interface PaymentState {
  selectedPayment: string;
  options: Record<string, MultiplePaymentOptionsState>;
  errorArray: string[];
}