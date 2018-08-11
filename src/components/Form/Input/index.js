import React from 'react'
import PropTypes from 'prop-types'
import Mask from 'react-text-mask'

import { Container, Label } from './styles'

const Input = ({
  type,
  label,
  id,
  placeholder,
  mask,
  value,
  handleChange,
  width,
  guide,
  withMask,
  hasError
}) => (
  <Container hasError={hasError} width={width}>
    <Label htmlFor={id}>{label}</Label>

    {withMask ? (
      <Mask
        type={type}
        id={id}
        placeholder={placeholder}
        mask={mask}
        value={value}
        onChange={handleChange}
        guide={guide}
      />
    ) : (
      <input type={type} id={id} value={value} onChange={handleChange} />
    )}
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
  width: PropTypes.number,
  guide: PropTypes.bool,
  withMask: PropTypes.bool,
  hasError: PropTypes.bool.isRequired
}

export default Input
