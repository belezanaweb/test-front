import React from 'react'
import { StyledText } from './styled'

const Text = (props) => {
  return (
    <>
      <StyledText>{props.text}</StyledText>
    </>
  )
}

export { Text }
