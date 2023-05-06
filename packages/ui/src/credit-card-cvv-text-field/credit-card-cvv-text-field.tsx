import { MaskedTextField, MaskedTextFieldProps } from '../masked-text-field'

type Props = Pick<MaskedTextFieldProps, 'onChange' | 'name' | 'value' | 'id'>

export const CreditCardCvvTextField = (props: Props) => {
  return <MaskedTextField {...props} mask="000" placeholder="000" />
}
