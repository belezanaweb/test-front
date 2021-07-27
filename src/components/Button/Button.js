import React from 'react'
import { ButtonContainer } from './styles'

const Button = ({ label, ...props }) => {
  return (
    <ButtonContainer type="submit" {...props}>
      {label}
    </ButtonContainer>
  )
}

export default Button
