import React from 'react'
import PropTypes from 'prop-types'
import Mask from 'react-text-mask'

import { Container, Label, Error } from './styles'

const Input = ({
  type,
  label,
  id,
  placeholder,
  mask,
  value,
  handleChange,
  handleBlur,
  width,
  errors,
  touched,
  guide,
  withMask
}) => (
  <Container hasError={errors[id] && touched[id]} width={width}>
    <Label htmlFor={id}>{label}</Label>
    {withMask ? (
      <Mask
        type={type}
        id={id}
        placeholder={placeholder}
        mask={mask}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        guide={guide}
      />
    ) : (
      <input type={type} id={id} value={value} onChange={handleChange} onBlur={handleBlur} />
    )}

    {errors[id] && touched[id] && <Error>{errors[id]}</Error>}
  </Container>
)

Input.defaultProps = {
  mask: [],
  width: 100,
  guide: false,
  withMask: false,
  hasError: false
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  mask: PropTypes.array,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  width: PropTypes.number,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  guide: PropTypes.bool,
  withMask: PropTypes.bool
}

export default Input
