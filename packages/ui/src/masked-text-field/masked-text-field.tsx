import { InputHTMLAttributes, forwardRef } from 'react'
import { IMaskMixin } from 'react-imask'
import { TextField } from '../text-field'

export type MaskedTextFieldProps = {
  onChange: (event: { target: { name: string; value: string; maskedValue: string } }) => void
  name: string
  mask: string
  label?: string
  helperText?: string | false
} & Pick<InputHTMLAttributes<HTMLInputElement>, 'id' | 'value' | 'placeholder'>

const Input = IMaskMixin(({ inputRef, ...props }) => <TextField {...props} ref={inputRef as any} />)

export const MaskedTextField = forwardRef<HTMLElement, MaskedTextFieldProps>((props, ref) => {
  const { onChange, ...other } = props

  return (
    <Input
      {...other}
      onChange={() => undefined} // to avoid warnings
      inputRef={ref as any}
      onAccept={(_value: any, mask) => {
        onChange({
          target: {
            name: props.name,
            value: mask.unmaskedValue,
            maskedValue: mask.value
          }
        })
      }}
      overwrite
    />
  )
})
