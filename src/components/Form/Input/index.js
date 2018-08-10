import React from 'react'
import PropTypes from 'prop-types'

import { Container, Label } from './styles'

const Input = ({ label, id, width, hasError, children }) => (
  <Container width={width} hasError={hasError}>
    <Label htmlFor={id}>{label}</Label>
    {children}
  </Container>
)

Input.defaultProps = {
  width: 100,
  hasError: false
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  width: PropTypes.number,
  children: PropTypes.node.isRequired
}

export default Input
