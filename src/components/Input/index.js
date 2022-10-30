import React, { useState } from 'react'

import { StyledInput, StyledLabel, StyledError } from './styles'

const Input = ({
  label,
  name,
  onlyNumbers,
  placeholder,
  hasError,
  errorLabel = 'Campo inválido',
  onValueChange,
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

    let str = e.target.value

    if (onlyNumbers) str = str.replace(/[A-Za-z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g, '')

    const formattedStr = maskPattern ? maskString(str, maskPattern) : str
    setValue(formattedStr)
    onValueChange(name, formattedStr)
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
