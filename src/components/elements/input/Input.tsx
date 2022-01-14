import React, { InputHTMLAttributes } from 'react'

import { StyledInput } from './Input.styled'

type InputProps = InputHTMLAttributes<any> & {
  invalid?: boolean
}

function Input(props: InputProps): JSX.Element {
  return <StyledInput {...props} />
}

export default Input
