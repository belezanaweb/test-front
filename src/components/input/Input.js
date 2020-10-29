import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask'
import { InputContainer, InputLabel, InputBox, InputErrorMessage } from './input.style'

const Input = forwardRef((props, ref) => {
  const { label, mask, error, minWidth, flexExpand } = props

  return (
    <InputContainer minWidth={minWidth} flexExpand={flexExpand}>
      <InputLabel>{label}</InputLabel>
      {mask && mask.length ? (
        <InputMask {...props}>
          {() => <InputBox isInvalid={error} ref={ref} {...props} />}
        </InputMask>
      ) : (
        <InputBox isInvalid={error} ref={ref} {...props} />
      )}

      {error && <InputErrorMessage>{error.message || 'Campo inválido'}</InputErrorMessage>}
    </InputContainer>
  )
})

Input.defaultProps = {
  label: '',
  mask: '',
  error: null,
  maskPlaceholder: '',
  minWidth: '',
  flexExpand: false
}

Input.propTypes = {
  label: PropTypes.string,
  mask: PropTypes.string,
  error: PropTypes.objectOf(PropTypes.any),
  maskPlaceholder: PropTypes.string,
  minWidth: PropTypes.string,
  flexExpand: PropTypes.bool
}

export default Input
