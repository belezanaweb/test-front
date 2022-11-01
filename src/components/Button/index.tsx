import React from 'react'

import { StyledButton } from './styles'

interface Props {
  children: React.ReactNode
}

const Button: React.FC<Props> = ({ children, ...props }) => <StyledButton {...props}>{children}</StyledButton>

export default Button
