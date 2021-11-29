import React from 'react'
import * as S from './styles'

export type ButtonProps = {
  text: string,
  type?: 'button' | 'submit' | 'reset'
}

export const Button: React.FC<ButtonProps> = ({ text, type = 'button' }) => {
  return (
    <S.Wrapper type={type}>
      <span>{text}</span>
    </S.Wrapper>
  )
}
