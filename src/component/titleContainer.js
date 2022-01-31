import React from 'react'
import * as S from './titleContainer.styles'

const TitleContainer = ({ title, children }) => {
  return (
    <>
      <S.TitleBox>{title}</S.TitleBox>
      <S.Box>{children}</S.Box>
    </>
  )
}

export default TitleContainer
