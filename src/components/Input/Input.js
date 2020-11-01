import React from 'react'
import { InputGroup, InputField, InputLabel, InputErrorMessage } from './Input.styles'

export const Input = ({ label, errorMessage, className, ...props }) => (
  <InputGroup className={className}>
    <InputLabel htmlFor={props.id}>{label}</InputLabel>
    <InputField {...props} />
    <InputErrorMessage>{errorMessage}</InputErrorMessage>
  </InputGroup>
)

Input.defaultProps = {
  errorMessage: 'Invalid Field',
  mask: false
}
