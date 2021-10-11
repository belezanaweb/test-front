import React from 'react'
import * as S from './styles'

const Button = ({ label, onClick }) => {
  return <S.ButtonContainer onClick={onClick}>{label}</S.ButtonContainer>
}

export default Button
