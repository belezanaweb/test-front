import React from 'react'
import * as B from './Button.styles'

const Button = ({ onClick, text, ...props }) => {
  return (
    <B.ButtonStyled onClick={onClick} {...props}>
      {text}
    </B.ButtonStyled>
  )
}

export default Button
