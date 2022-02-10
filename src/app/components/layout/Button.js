import React from 'react'
import { ContainerButton } from './Button.style'

const Button = (props) => {
  const { text, onClick, type, form, disabled } = props
  return (
    <ContainerButton>
      <button disabled={disabled} type={type} form={form} onClick={onClick}>
        {text}
      </button>
    </ContainerButton>
  )
}

export default Button
