import React from 'react'
import * as I from './Input.styles'

const Input = ({ size, value, title, name, placeholder, type, onChange, valid, pattern }) => {
  return (
    <I.DivStyled>
      <I.LabelStyled>{title}</I.LabelStyled>
      <I.InputStyled
        size={size}
        value={value}
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={onChange}
        valid={valid}
        pattern={pattern}
      />
    </I.DivStyled>
  )
}

export default Input
