import React from 'react'
import * as S from './styles'

export type ItemProps = {
  name: string,
  status: boolean
}

export type HeaderItemProps = {
  title: ItemProps
}

export const HeaderItem: React.FC<HeaderItemProps> = ({ title }) => {
  return (
    <S.Wrapper status={title.status}>
      <span>{title.name}</span>
    </S.Wrapper>
  )
}
