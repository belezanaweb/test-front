import React from 'react'

import { StyledButton } from './styles'

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>
}

export default Button
