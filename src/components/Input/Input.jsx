import React from 'react'
import * as CSS from './style'
import InputMask from 'react-input-mask'

export default function Input({ name, label, mask, type, onChange, valid, placeholder }) {
  return (
    <CSS.Wrapper valid={valid}>
      <CSS.Label htmlFor={name}>{label}</CSS.Label>
      <InputMask
        mask={mask}
        name={name}
        type={type}
        id={name}
        onChange={onChange}
        placeholder={placeholder}
      />
      {!valid && <CSS.ErrorLabel>Campo Inválido</CSS.ErrorLabel>}
    </CSS.Wrapper>
  )
}
