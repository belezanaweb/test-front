import React, { useState } from 'react'
import InputMask from 'react-input-mask'

interface Props {
  handleChange: Function
}

const CreditCardInput: React.FC<Props> = ({ handleChange }) => {
  const [value, setValue] = useState('')
  const [mask, setMask] = useState('')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const digits = event.target.value
    setValue(digits)
    const newMask = /^3[47]/.test(digits) ? '9999.999999.99999' : '9999.9999.9999.9999'
    setMask(newMask)
    handleChange(event)
  }

  return (
    <InputMask
      required
      name="creditcard"
      placeholder="____.____.____.____"
      value={value}
      mask={mask}
      onChange={onChange}
    />
  )
}

export default CreditCardInput
