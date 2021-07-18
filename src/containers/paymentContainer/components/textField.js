import React from 'react'
import './textField.css'
import InputMask from 'react-input-mask'

const TextField = ({ className, label, onChange, value, mask, placeholder }) => (
  <div className="textField">
    <div className="label">{label}</div>
    <InputMask
      className={'input ' + className}
      placeholder={placeholder}
      mask={mask}
      onChange={onChange}
      value={value}
      alwaysShowMask="true"
    />
  </div>
)

export { TextField }
