import React from 'react'
import { StyledText, TextContainer } from './styles'

const Subtitle = (props) => {
  return (
    <TextContainer>
      <StyledText>{props.text}</StyledText>
    </TextContainer>
  )
}

export default Subtitle
