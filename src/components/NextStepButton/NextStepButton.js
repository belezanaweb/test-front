import React from 'react'
import { StyledButton } from './styles'

const NextStepButton = (props) => {
  return (
    <div>
      <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
    </div>
  )
}

export default NextStepButton
