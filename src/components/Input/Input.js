import React from 'react'
import { StyledInput, StyledLabel } from './style'

const Input = ({ label, ...props }) => {
  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...props} />
    </>
  )
}

export default Input
