import { Ref, forwardRef } from 'react'

import { InputContainer, InputStyled, InputLabel, InputFeedback } from './Input.styled'
import { InputProps } from './Input.types'

const BaseInput = (
  { onChange, value, label, placeholder, error, ...props }: InputProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}

      <InputStyled
        onChange={onChange}
        error={error}
        ref={ref}
        defaultValue={value}
        placeholder={placeholder}
        {...props}
      />
      {error && <InputFeedback>{error}</InputFeedback>}
    </InputContainer>
  )
}

export const Input = forwardRef(BaseInput)
