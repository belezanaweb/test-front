import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useField } from '@unform/core'

import { Container, Error } from './styles'

export const Input = ({ width, disabled, name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const { fieldName, defaultValue, error, registerField } = useField(name)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
      disabled={disabled}
      width={width}
    >
      {Icon && <Icon size={20} fill="#202020" />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        disabled={disabled}
        width={width}
        {...rest}
      />
      {error && <Error title={error}>a</Error>}
    </Container>
  )
}
