import React from 'react'
import * as S from './ContainerPage.styles'

const ContainerPage = ({ children }) => {
  return (
    <S.Container>
      <S.InnerContainer>{children}</S.InnerContainer>
    </S.Container>
  )
}

export default ContainerPage
