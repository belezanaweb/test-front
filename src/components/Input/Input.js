import React, { useState, useRef } from 'react'
import { string } from 'prop-types'
import { StyledInput, StyledLabel, StyledLabelError } from './style'

const Input = ({ label, onChange, ...props }) => {
  const [hasError, setError] = useState(false)
  const ref = useRef(null)

  function handleChange(e) {
    onChange(e)
    setError(false)
  }

  function onBlur() {
    if (ref.current === null) {
      return
    }
    const isValid = ref.current.checkValidity()
    isValid ? setError(false) : setError(true)
  }


  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        onBlur={onBlur}
        {...props}
        onChange={handleChange}
        hasError={hasError}
        ref={ref}
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
