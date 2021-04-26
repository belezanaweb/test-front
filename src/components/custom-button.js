import React from 'react'
import { Button, Margin } from '../css/styles'

export default function CustomButton({ id, label, disabled }) {
  return (
    <Margin>
      <Button id={id} disabled={disabled}>
        {' '}
        {label}{' '}
      </Button>
    </Margin>
  )
}
