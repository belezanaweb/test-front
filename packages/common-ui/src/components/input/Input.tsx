import { VariantProps } from 'class-variance-authority'
import { InputHTMLAttributes } from 'react'
import InputMask from 'react-input-mask'

import { inputFieldStyles } from './styles'

export type InputFieldProps = {
  errorText?: string,
  label?: string,
  mask?: string
} & InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputFieldStyles>

export default function InputField({
  errorText,
  label,
  mask = '',
  id,
  hasError,
  ...props
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm text-gray-500">
          {label}
        </label>
      )}

      <InputMask
        mask={mask}
        maskChar={null}
        className={inputFieldStyles({ hasError })}
        id={id}
        value={props.value}
        onChange={props.onChange}
        {...props}
      />
      {errorText && <span className="text-error text-xs">{errorText}</span>}
    </div>
  )
}
