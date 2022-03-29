import React from 'react'
import * as S from './Button.styles'

const Button = ({ id, onClick, text, disabled, ...props }) => {
  return (
    <S.ButtonStyled disabled={disabled} id={id} onClick={onClick} {...props}>
      {text}
    </S.ButtonStyled>
  )
}

export default Button
