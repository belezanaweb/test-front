import React from 'react'

import { StyledInput, StyledLabel, StyledError } from './styles'

const Input = ({ label, hasError, errorLabel = 'Campo inválido', onChange, name }, ...props) => {
  return (
    <StyledLabel>
      {label}
      <StyledInput onChange={onChange} name={name} error={hasError} {...props} />
      {hasError && <StyledError>{errorLabel}</StyledError>}
    </StyledLabel>
  )
}

export default Input
