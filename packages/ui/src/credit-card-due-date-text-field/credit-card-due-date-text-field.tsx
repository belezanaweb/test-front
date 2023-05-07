import { forwardRef } from 'react'
import { MaskedTextField, MaskedTextFieldProps } from '../masked-text-field'

type Props = Pick<MaskedTextFieldProps, 'onChange' | 'name' | 'value' | 'id' | 'label' | 'helperText'>

export const CreditCardDueDateTextField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <MaskedTextField {...props} ref={ref} mask="00/00" placeholder="MM/AA" />
})
