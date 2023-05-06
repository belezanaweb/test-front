import { MaskedTextField, MaskedTextFieldProps } from '../masked-text-field'

type Props = Pick<MaskedTextFieldProps, 'onChange' | 'name' | 'value' | 'id' | 'label'>

export const CreditCardDueDateTextField = (props: Props) => {
  return <MaskedTextField {...props} mask="00/0000" placeholder="MM/AA" />
}
