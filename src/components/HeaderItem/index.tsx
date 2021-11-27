import React from 'react'
import * as S from './styles'

export type ItemProps = {
  name: string,
  status: boolean
}

export const HeaderItem: React.FC<ItemProps> = ({ name, status }) => {
  return (
    <S.Wrapper status={status}>
      <span>{name}</span>
    </S.Wrapper>
  )
}
