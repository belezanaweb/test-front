import { forwardRef } from 'react'
import { MaskedTextField, MaskedTextFieldProps } from '../masked-text-field'

type Props = Pick<
  MaskedTextFieldProps,
  'onChange' | 'name' | 'value' | 'id' | 'label' | 'helperText'
>

export const CreditCardTextField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <MaskedTextField
      {...props}
      ref={ref}
      mask="0000 0000 0000 0000"
      placeholder="0000 0000 0000 0000"
    />
  )
})
