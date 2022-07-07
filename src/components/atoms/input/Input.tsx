import React, { ChangeEvent, ForwardedRef, forwardRef } from 'react'
import { InputBox, InputContainer, InputErrorMessage, InputLabel } from './Input.style'

export interface InputProps {
  label: string
  placeholder?: string
  error?: string
  mask?: string
  minWidth?: string
  expand?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  formatValue?: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputComponent = (
  { label, error, placeholder, minWidth, expand, onChange, formatValue, ...rest }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => (
  <InputContainer minWidth={minWidth} expand={expand}>
    <InputLabel>{label}</InputLabel>
    <InputBox
      placeholder={placeholder}
      ref={ref}
      invalid={!!error}
      {...rest}
      onChange={(event) => {
        if (formatValue) formatValue(event)
        if (onChange) onChange(event)
      }}
    />
    {error && <InputErrorMessage>{error}</InputErrorMessage>}
  </InputContainer>
)

export const Input = forwardRef<HTMLInputElement, InputProps>(InputComponent)
