import React from 'react'
import * as CSS from './style'
import InputMask from 'react-input-mask'

export default function Input({ name, label, mask, type, placeholder }) {
  return (
    <CSS.Wrapper>
      <CSS.Label for={name}>{label}</CSS.Label>
      <InputMask mask={mask} name={name} type={type} id={name} placeholder={placeholder} />
    </CSS.Wrapper>
  )
}
