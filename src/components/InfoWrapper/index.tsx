import React, { ReactNode } from 'react'
import * as S from './styles'

interface InfoWrapperProps {
  title: string
  children: ReactNode
}

const InfoWrapper = ({ children, title }: InfoWrapperProps) => {
  return (
    <>
      <S.Title>{title}</S.Title>
      <S.Wrapper>{children}</S.Wrapper>
    </>
  )
}

export default InfoWrapper
