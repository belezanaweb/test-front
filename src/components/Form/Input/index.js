import React from 'react'
import PropTypes from 'prop-types'

import { Container, Label } from './styles'

const Input = ({ label, id, width, margin, hasError, children }) => (
  <Container width={width} margin={margin} hasError={hasError}>
    <Label htmlFor={id}>{label}</Label>
    {children}
  </Container>
)

Input.defaultProps = {
  width: 100,
  margin: 25,
  hasError: false
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  width: PropTypes.number,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hasError: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

export default Input
