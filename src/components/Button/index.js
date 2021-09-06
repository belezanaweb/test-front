import React from 'react'
import { StyledButton } from './styles'

const Button = ({ title, onClick, ...props }) => {
  return (
    <StyledButton {...props} onClick={onClick}>
      {title}
    </StyledButton>
  )
}

export default Button
