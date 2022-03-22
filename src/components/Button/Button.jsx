import React from 'react'
import * as B from './Button.styles'

const Button = ({ id, onClick, text, disabled, ...props }) => {
  return (
    <B.ButtonStyled disabled={disabled} id={id} onClick={onClick} {...props}>
      {text}
    </B.ButtonStyled>
  )
}

export default Button
