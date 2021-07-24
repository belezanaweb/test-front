import React from 'react'
import { ContainerInput } from './styles'

import MaskInput from 'react-maskinput'

function Input({
  label,
  error,
  maxWidth,
  mask,
  size,
  onChange,
  margin,
  value,
  placeholder,
  ...props
}) {
  return (
    <ContainerInput maxWidth={maxWidth} margin={margin} error={error}>
      <label>{`${label}:`}</label>
      {mask ? (
        <MaskInput
          placeholder={placeholder}
          mask={mask}
          size={size}
          onChange={onChange}
          value={value}
        />
      ) : (
        <input placeholder={placeholder} onChange={onChange} value={value} {...props} />
      )}
      {error ? <p>Invalid field</p> : null}
    </ContainerInput>
  )
}

export default Input
