import React from 'react'
import { mask, unMask } from 'remask'
import { Container } from './styles'

const Input = ({ form, name, label, type, masks, ...props }) => {
  const { values, setFieldValue, errors } = form || {}
  const value = values?.[name]

  return (
    <Container error={errors?.[name]} role="input">
      <label htmlFor={name}>{label}</label>
      <input
        {...props}
        name={name}
        type={type}
        value={value && masks ? mask(value, masks) : value}
        onChange={({ target }) =>
          setFieldValue(name, target.value && masks ? unMask(target.value) : target.value)
        }
      />
      {errors?.[name] && <p>{errors[name]}</p>}
    </Container>
  )
}

export default Input
