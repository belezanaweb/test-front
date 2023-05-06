import { MaskedTextField, MaskedTextFieldProps } from '../masked-text-field'

type Props = Pick<MaskedTextFieldProps, 'onChange' | 'name' | 'value' | 'id'>

export const CreditCardDueDateTextField = (props: Props) => {
  return <MaskedTextField {...props} mask="00/00" placeholder="MM/AA" />
}
