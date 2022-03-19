import React from 'react'
import * as I from './Input.styles'

const Input = ({ value, name, placeholder, type, onChange }) => {
  return (
    <I.LabelStyled>
      {value}
      <I.DivStyled>
        <I.InputStyled placeholder={placeholder} name={name} type={type} onChange={onChange} />
      </I.DivStyled>
    </I.LabelStyled>
  )
}

export default Input
