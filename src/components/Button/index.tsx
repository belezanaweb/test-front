import React from 'react'
import * as S from './styles'

export type ButtonProps = {
  text: string
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <S.Wrapper>
      <span>{text}</span>
    </S.Wrapper>
  )
}
