import React from 'react'
import { useField } from '@unform/core'

import InputMask from './../FormInput'

import { Container, Label, ErrorMessage } from './styles'

function FormControl({ name, label, ...rest }) {
  const { error } = useField(name)

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputMask name={name} {...rest} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  )
}

export default FormControl
