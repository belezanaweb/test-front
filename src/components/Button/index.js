import React from 'react'
import { StyledButton } from './styles'

const Button = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>
}

export default Button
