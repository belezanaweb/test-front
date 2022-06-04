import React, { useState } from 'react'

import { InputContainer, InputMaskStyled } from './styles'

type Props = {
  type: string
  mask?: string
  placeholder: string
  label: string
}

function Input({ type, mask, placeholder, label }: Props) {
  const [inputValue, setInputValue] = useState('')

  return (
    <InputContainer>
      <label htmlFor={label}>{label}</label>
      <InputMaskStyled mask={mask ? mask : ''} id={label} type={type} placeholder={placeholder} />
    </InputContainer>
  )
}

export default Input
