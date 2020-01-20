import React from 'react'

import { Button } from './styles'

const BLWButton = ({ title, onClick, type, disabled, id, className }) => {
  return (
    <Button type={type} disabled={disabled} onClick={onClick} id={id} className={className}>
      {title}
    </Button>
  )
}

export default BLWButton
