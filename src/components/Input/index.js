import React from 'react'
import { ContainerInput } from './styles'

function Input({ label, maxWidth, margin, ...props }) {
  return (
    <ContainerInput maxWidth={maxWidth} margin={margin}>
      <label>{`${label}:`}</label>
      <input {...props} />
    </ContainerInput>
  )
}

export default Input
