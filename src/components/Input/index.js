import React from 'react'

import { StyledInput, StyledLabel } from './styles'

const Input = ({ label }, ...props) => {
  return (
    <StyledLabel>
      {label}
      <StyledInput {...props} />
    </StyledLabel>
  )
}

export default Input
