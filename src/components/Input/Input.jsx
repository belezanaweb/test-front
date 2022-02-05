import React from 'react'
import * as CSS from './style'
import InputMask from 'react-input-mask'

export default function Input({ name, label, mask, type, onChange, placeholder }) {
  return (
    <CSS.Wrapper>
      <CSS.Label htmlFor={name}>{label}</CSS.Label>
      <InputMask
        mask={mask}
        name={name}
        type={type}
        id={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </CSS.Wrapper>
  )
}
