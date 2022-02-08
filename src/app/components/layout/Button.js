import React from 'react'
import { ContainerButton } from './Button.style'

const Button = (props) => {
  return (
    <ContainerButton>
      <button>{props.text}</button>
    </ContainerButton>
  )
}

export default Button
