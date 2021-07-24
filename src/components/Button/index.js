import React from 'react'
import { ContainerButton } from './styles'

function Button({ children, ...props }) {
  return <ContainerButton {...props}>{children}</ContainerButton>
}

export default Button
