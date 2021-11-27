import React from 'react'
import * as S from './styles'

export type HeadingProps = {
  title: string
}

export const Heading: React.FC<HeadingProps> = ({ title }) => {
  return <S.Wrapper>{title}</S.Wrapper>
}
