import React from 'react'

import { Input } from './styles'

const BLWInput = ({ type, disabled, id, className, placeholder, value, onFocus, onChange }) => {
  return (
    <Input
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      className={className}
    />
  )
}

export default BLWInput
