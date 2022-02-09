import React from 'react'
import { ContainerButton } from './Button.style'

const Button = (props) => {
  const { text, onClick } = props
  return (
    <ContainerButton>
      <button onClick={onClick}>{text}</button>
    </ContainerButton>
  )
}

export default Button
