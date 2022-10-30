import React, { useState } from 'react'

import { StyledInput, StyledLabel, StyledError } from './styles'

const Input = ({
  label,
  name,
  placeholder,
  hasError,
  errorLabel = 'Campo inválido',
  onChange,
  onFocus,
  maskPattern,
  maskDivider = ''
}) => {
  const [value, setValue] = useState('')

  const maskString = (str, pattern) => {
    let i = 0

    let slicePattern = pattern.slice(0, str.length)

    const formattedStr = str.replaceAll(maskDivider, '')

    if (slicePattern.substring(slicePattern.length - 1) === maskDivider) {
      if (formattedStr.length !== slicePattern.replaceAll(maskDivider, '').length)
        slicePattern = `${slicePattern}#`
    }

    const padded = slicePattern.replace(/#/g, () => {
      return formattedStr[i++]
    })
    return padded
  }

  const handleOnFocus = () => {}

  const handleOnChange = (e) => {
    e.preventDefault()
    setValue(maskPattern ? maskString(e.target.value, maskPattern) : e.target.value, maskPattern)
  }

  const handleOnBlur = (e) => {}

  return (
    <StyledLabel>
      {label}
      <StyledInput
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        error={hasError}
      />
      {hasError && <StyledError>{errorLabel}</StyledError>}
    </StyledLabel>
  )
}

export default Input
