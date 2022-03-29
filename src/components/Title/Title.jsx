import React from 'react'
import * as S from './Title.styled'

const Title = ({ color, size, text, ...props }) => {
  return (
    <S.StyledTitle data-testid="title" color={color} size={size} {...props}>
      {text}
    </S.StyledTitle>
  )
}

export default Title
