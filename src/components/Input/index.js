import React, { useEffect, useRef } from 'react'
import ReactInputMask from 'react-input-mask'
import PropTypes from 'prop-types'
import { useField } from '@unform/core'

import { Container, Label, CustomInput, Error } from './styles.css'

const Input = ({ name, label, placeholder, mask, maskPlaceholder, ...rest }) => {
  const inputRef = useRef()
  const { fieldName, defaultValue, registerField, error, clearError } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      path: 'value',
      getValue: (ref) => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: (ref) => {
        ref.current.value = ''
      }
    })
  }, [fieldName, registerField])

  return (
    <Container>
      <Label>{label}:</Label>
      <CustomInput error={!!error}>
        <ReactInputMask
          name={name}
          placeholder={placeholder}
          ref={inputRef}
          defaultValue={defaultValue}
          type="text"
          onFocus={clearError}
          mask={mask}
          maskPlaceholder={maskPlaceholder}
          alwaysShowMask
          {...rest}
        />
      </CustomInput>
      {error && <Error>{error}</Error>}
    </Container>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  mask: PropTypes.string,
  maskPlaceholder: PropTypes.string
}

export default Input
