import React, { useRef, useEffect } from 'react'
import { useField } from '@unform/core'

import { StyledInputMask } from './styles'

function InputMask({ name, ...rest }) {
  const inputRef = useRef(null)
  const { fieldName, registerField, defaultValue, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref, value) {
        ref.setInputValue(value)
      },
      clearValue(ref) {
        ref.setInputValue('')
      }
    })
  }, [fieldName, registerField])

  return (
    <StyledInputMask
      ref={inputRef}
      defaultValue={defaultValue}
      error={error}
      alwaysShowMask={false}
      {...rest}
    />
  )
}

export default InputMask
