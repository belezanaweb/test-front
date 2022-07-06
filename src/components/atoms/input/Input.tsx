import React, { ChangeEvent, ForwardedRef, forwardRef } from 'react'
import { InputBox, InputContainer, InputErrorMessage, InputLabel } from './Input.style'

interface InputProps {
  label: string
  placeholder?: string
  error?: string
  mask?: string
  minWidth?: string
  expand?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputComponent = (
  { label, error, placeholder, minWidth, expand, onChange, ...rest }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => (
  <InputContainer minWidth={minWidth} expand={expand}>
    <InputLabel>{label}</InputLabel>
    <InputBox
      placeholder={placeholder}
      ref={ref}
      onChange={(event) => onChange && onChange(event)}
      invalid={!!error}
      {...rest}
    />
    {error && <InputErrorMessage>{error}</InputErrorMessage>}
  </InputContainer>
)

export const Input = forwardRef<HTMLInputElement, InputProps>(InputComponent)
