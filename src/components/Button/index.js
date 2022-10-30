import React from 'react'

import { StyledButton } from './styles'

const Button = (props) => <StyledButton {...props}>{props.children}</StyledButton>

export default Button
