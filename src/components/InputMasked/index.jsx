import React from 'react'
import InputMask from 'react-input-mask'
import { DivMaskInput } from './styled'

export default function InputMasked(props) {
  return (
    <DivMaskInput {...props}>
      <InputMask {...props} />
    </DivMaskInput>
  )
}
