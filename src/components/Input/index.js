import React from 'react'

import { Container, Input, Label, Error } from './styles'

function InputComponent({
  onFocus = null,
  name = '',
  label = '',
  onChange = null,
  placeholder = '',
  mask = null,
  maskPlaceholder = null,
  value = null,
  error = false,
  errorMessage = '',
  size = '',
  maxLength = null,
  minLength = null,
  onBlur = null
}) {
  return (
    <Container size={size}>
      <Label>{label}:</Label>
      <Input
        value={value}
        mask={mask}
        placeholder={placeholder}
        maskPlaceholder={maskPlaceholder}
        onFocus={onFocus}
        name={name}
        onChange={onChange}
        error={error}
        autoComplete={'off'}
        maxLength={maxLength}
        minLength={minLength}
        onBlur={onBlur}
      ></Input>
      {error && <Error>{errorMessage}</Error>}
    </Container>
  )
}

export default InputComponent
