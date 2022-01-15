import React from 'react'
import * as S from './Button.styles'

const Button = ({ text, onClick, ...props }) => {
  return (
    <S.StyledButton onClick={onClick} {...props}>
      {text}
    </S.StyledButton>
  )
}

export default Button
