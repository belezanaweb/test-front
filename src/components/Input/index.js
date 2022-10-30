import React from 'react'

import { StyledInput, StyledLabel, StyledError } from './styles'

const Input = ({ label, hasError, errorLabel = 'Campo inválido' }, ...props) => {
  return (
    <StyledLabel>
      {label}
      <StyledInput {...props} error={hasError} />
      {hasError && <StyledError>{errorLabel}</StyledError>}
    </StyledLabel>
  )
}

export default Input
