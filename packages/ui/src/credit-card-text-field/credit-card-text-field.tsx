import { MaskedTextField, MaskedTextFieldProps } from '../masked-text-field'

type Props = Pick<MaskedTextFieldProps, 'onChange' | 'name' | 'value' | 'id' | 'label'>

export const CreditCardTextField = (props: Props) => {
  return <MaskedTextField {...props} mask="0000 0000 0000 0000" placeholder="0000 0000 0000 0000" />
}
