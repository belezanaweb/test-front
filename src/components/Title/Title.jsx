import React from 'react'
import * as S from './Title.styled'

const Title = ({ text, ...props }) => {
  return <S.StyledTitle {...props}>{text}</S.StyledTitle>
}

export default Title
