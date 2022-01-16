import React, { LabelHTMLAttributes } from 'react'

import { StyledLabel } from './Label.styled'

type LabelProps = LabelHTMLAttributes<any> & {
  text: string
}

function Label({ text, ...props }: LabelProps): JSX.Element {
  return <StyledLabel {...props}>{text}:</StyledLabel>
}

export default Label
