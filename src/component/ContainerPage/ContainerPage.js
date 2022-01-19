import React from 'react'
import * as S from './ContainerPage.styles'

const ContainerPage = ({ children, deskFlex }) => {
  return (
    <S.Container>
      <S.InnerContainer deskFlex={deskFlex}>{children}</S.InnerContainer>
    </S.Container>
  )
}

export default ContainerPage
