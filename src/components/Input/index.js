import React, { useState } from 'react'

import { StyledInput, StyledLabel, StyledError } from './styles'

const Input = (
  { label, name, placeholder, hasError, errorLabel = 'Campo inválido', onChange, onFocus },
  ...props
) => {
  const pattern = '#### #### #### ####'

  const [value, setValue] = useState('')

  const maskString = (str, pattern) => {
    let i = 0

    let slicePattern = pattern.slice(0, str.length)

    const formattedStr = str.replaceAll(' ', '')

    if (slicePattern.substring(slicePattern.length - 1) === ' ') {
      if (formattedStr.length !== slicePattern.replaceAll(' ', '').length)
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
    setValue(maskString(e.target.value, pattern))
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
        {...props}
      />
      {hasError && <StyledError>{errorLabel}</StyledError>}
    </StyledLabel>
  )
}

export default Input
