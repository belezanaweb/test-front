import React, { useContext } from 'react'
import CheckoutFormContext from '../../context/CheckoutFormContext'

const InputField = ({ name, label, children }) => {
  const formValues = useContext(CheckoutFormContext)

  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      {children}
      {formValues[name] && !formValues[name].isValid && <span>campo inválido</span>}
    </div>
  )
}

export default InputField
