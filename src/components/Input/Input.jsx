import React from 'react'
import * as I from './Input.styles'

const Input = ({ size, value, name, placeholder, type, onChange }) => {
  return (
    <I.DivStyled>
      <I.LabelStyled>{value}</I.LabelStyled>
      <I.InputStyled
        size={size}
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={onChange}
      />
    </I.DivStyled>
  )
}

export default Input
