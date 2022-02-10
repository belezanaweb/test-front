import React from 'react'
import { ContainerButton } from './Button.style'

const Button = (props) => {
  const { text, onClick, type, form } = props
  return (
    <ContainerButton>
      <button type={type} form={form} onClick={onClick}>
        {text}
      </button>
    </ContainerButton>
  )
}

export default Button
