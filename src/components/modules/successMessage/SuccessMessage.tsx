import React from 'react'

import { ReactComponent as CheckSVG } from '../../../assets/image/check.svg'

import { StyledSuccessMessage, StyledIconContainer } from './SuccessMessage.styled'

type SuccessMessageProps = {
  message: string
}

function SuccessMessage({ message }: SuccessMessageProps): JSX.Element {
  return (
    <StyledSuccessMessage>
      <StyledIconContainer>
        <CheckSVG />
      </StyledIconContainer>
      {message}
    </StyledSuccessMessage>
  )
}

export default SuccessMessage
