import React from 'react'
// input library
import MaskInput from 'react-maskinput'

import { Container } from './styles'

const Input = ({
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
}) => {
  return (
    <Container maxWidth={maxWidth} margin={margin} error={error}>
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
      {/* if the fields are filled out incorrectly, this message is displayed */}
      {error ? <p>Campo inválido</p> : null}
    </Container>
  )
}

export default Input
