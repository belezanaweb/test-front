import React from 'react'
import * as S from './Button.styles'

const Button = ({ text, onClick }) => {
  return <S.StyledButton onClick={onClick}>{text}</S.StyledButton>
}

export default Button
