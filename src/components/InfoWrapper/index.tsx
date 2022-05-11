import React, { ReactNode } from 'react'
import * as S from './styles'

interface InfoWrapperProps {
  title: string
  children: ReactNode
}

const InfoWrapper = ({ children, title }: InfoWrapperProps) => {
  return (
    <div>
      <S.Title>{title}</S.Title>
      <S.Wrapper>{children}</S.Wrapper>
    </div>
  )
}

export default InfoWrapper
