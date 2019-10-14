import React, { useState } from 'react'
import { string } from 'prop-types'
import { StyledInput, StyledLabel, StyledLabelError } from './style'


const Input = ({ label, onChange, ...props }) => {
  const [hasError, setError] = useState(false)

  function handleChange(e) {
    onChange(e)
    setError(false)
  }

  function onInvalid() {
    setError(true)
  }

  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        onInvalid={onInvalid}
        {...props}
        onChange={handleChange}
        hasError={hasError}
      />
      <StyledLabelError hasError={hasError}>Campo inválido</StyledLabelError>
    </>
  )
}

Input.propTypes = {
  value: string,
  label: string.isRequired,
}

Input.defaultProps = {
  value: ''
}

export default Input
