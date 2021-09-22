import React, { FC } from 'react'

import { IInputProps } from './input.interface'
import { InputStyled } from './input.style'

export const Input: FC<IInputProps> = ({
  value,
  label,
  placeholder,
  errorMessage = 'Campo Inválido',
  isValid,
  handleChange,
  className,
  autoComplete
}) => {
  return (
    <InputStyled valid={isValid} empty={!value?.length} className={className}>
      <span className="label">{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
        value={value}
        autoComplete={autoComplete}
        required
      />
      {!isValid && <span className="error">{errorMessage}</span>}
    </InputStyled>
  )
}
