import React, { useEffect, useRef } from 'react'
import { Container, Error } from './style'
import { useField } from '@unform/core'

const Input = ({ name, ...rest }) => {
  const inputRef = useRef(null)

  const { fieldName, defaultValue, error, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container isErrored={!!error}>
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
      {error && <Error>{error}</Error>}
    </Container>
  )
}

export default Input
