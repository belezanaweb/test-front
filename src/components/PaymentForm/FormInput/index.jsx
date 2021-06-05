import React, { useRef, useEffect } from 'react'
import { useField } from '@unform/core'

import { StyledInput, StyledInputMask } from './styles'

function InputMask({ name, mask, ...rest }) {
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

  if (mask) {
    return (
      <StyledInputMask
        ref={inputRef}
        defaultValue={defaultValue}
        error={error}
        alwaysShowMask={false}
        maskChar={null}
        mask={mask}
        {...rest}
      />
    )
  }

  return <StyledInput ref={inputRef} defaultValue={defaultValue} error={error} {...rest} />
}

export default InputMask
