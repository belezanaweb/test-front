import { VariantProps } from 'class-variance-authority'
import { InputHTMLAttributes, forwardRef } from 'react'
import InputMask from 'react-input-mask'

import { inputFieldStyles } from './styles'

type InputFieldProps = {
  errorText?: string,
  label?: string,
  mask?: string,
} & InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputFieldStyles>

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({
    errorText,
    label,
    mask = '',
    id,
    ...props
  }, reference) => {
    const hasError = !!errorText?.length;

    return (
      <div data-testid="common-ui-input" className="flex w-full flex-col gap-1.5">
        {label && (
          <label data-testid="common-ui-input-label" htmlFor={id} className="text-sm text-gray-500">
            {label}
          </label>
        )}

        <InputMask
          mask={mask}
          inputRef={reference}
          maskChar={null}
          className={inputFieldStyles({ hasError })}
          id={id}
          value={props.value}
          onChange={props.onChange}
          {...props}
        />

        {hasError && <span className="text-error text-xs">{errorText}</span>}
    </div>
    )
  }
)


