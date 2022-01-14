import React, { ButtonHTMLAttributes } from 'react'

import { StyledButton } from './Button.styled'

function Button({ children, ...props }: ButtonHTMLAttributes<any>): JSX.Element {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
