import React from 'react'

import { StyledErrorText } from './ErrorText.styled'

type ErrorTextProps = {
  text: string
}

function ErrorText({ text, ...props }: ErrorTextProps): JSX.Element {
  return <StyledErrorText {...props}>{text}</StyledErrorText>
}

export default ErrorText
