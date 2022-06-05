import React from 'react'

import { InputContainer, InputMaskStyled } from './styles'

type Props = {
  type: string
  mask?: string
  placeholder: string
  label: string
  value: string
  setValues: React.Dispatch<React.SetStateAction<string>>
  errorComponent: JSX.Element
}

function Input({ type, mask, placeholder, label, value, setValues, errorComponent }: Props) {
  return (
    <InputContainer>
      <label htmlFor={label}>{label}</label>
      <InputMaskStyled
        value={value}
        mask={mask ? mask : ''}
        id={label}
        type={type}
        placeholder={placeholder}
        onChange={(e: any) => {
          setValues(e.target.value)
        }}
      />
      {errorComponent}
    </InputContainer>
  )
}

export default Input
