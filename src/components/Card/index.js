import React from 'react'

import * as S from './styles'

const Card = ({ title, titleAs, children }) => {
  return (
    <S.Container>
      {title && <S.Title as={titleAs}>{title}</S.Title>}

      <S.Wrapper>{children}</S.Wrapper>
    </S.Container>
  )
}

export default Card
