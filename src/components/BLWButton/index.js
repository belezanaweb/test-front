import React from 'react'

import { Button } from './styles'

const BLWButton = ({ title, onClick, type, disabled, id, className }) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      id={id}
      className={className}
      data-test="buttonComponent"
    >
      {title}
    </Button>
  )
}

export default BLWButton
