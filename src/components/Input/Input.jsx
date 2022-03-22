import React from 'react'
import * as I from './Input.styles'

const Input = ({
  id,
  size,
  value,
  title,
  valid,
  name,
  placeholder,
  type,
  onChange,
  pattern,
  required,
  maxLength
}) => {
  return (
    <I.DivStyled>
      <I.LabelStyled>{title}</I.LabelStyled>
      <I.InputStyled
        id={id}
        size={size}
        value={value}
        placeholder={placeholder}
        valid={valid}
        name={name}
        type={type}
        onChange={onChange}
        pattern={pattern}
        required={required}
        maxLength={maxLength}
      />
    </I.DivStyled>
  )
}

export default Input
